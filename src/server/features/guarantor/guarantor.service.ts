import { validateSchema } from '~/server/service/validation.service';
import type {
    CreateGuarantorRequest,
    GuarantorWithCustomerRelationsResponse,
    GuarantorWithRelationsResponse,
    UpdateGuarantorRequest,
} from './guarantor.model';
import { guarantorRepository } from './guarantor.repository';
import {
    createGuarantorRequest,
    updateGuarantorRequest,
} from './guarantor.validation';
import {
    BadRequestException,
    NotFoundException,
} from '~/server/helper/error.exception';
import { type Guarantor } from '@prisma/client';
import {
    toGuarantorResponse,
    toGuarantorWithCustomerRelationsResponse,
    toGuarantorWithRelationsResponse,
} from './guarantor.response';
import { StatsResponse, Trend } from '~/server/types/api';

export const guarantorService = {
    getAll: async (): Promise<GuarantorWithRelationsResponse[]> => {
        const response = await guarantorRepository.findMany();

        const guarantors = response?.map(guarantor =>
            toGuarantorWithRelationsResponse(guarantor),
        );

        return guarantors;
    },

    getById: async (id: string): Promise<GuarantorWithRelationsResponse> => {
        const guarantor = await guarantorRepository.findUniqueId(id);

        if (!guarantor) {
            throw new NotFoundException(`Guarantor with id ${id} not found`);
        }

        return toGuarantorWithRelationsResponse(guarantor);
    },

    getByIdWithCustomerRelations: async (
        id: string,
    ): Promise<GuarantorWithCustomerRelationsResponse> => {
        const guarantor =
            await guarantorRepository.findUniqueIdWithCustomerRelations(id);

        if (!guarantor) {
            throw new NotFoundException(`Guarantor with id ${id} not found`);
        }

        return toGuarantorWithCustomerRelationsResponse(guarantor);
    },

    countAll: async (): Promise<number> => {
        const countguarantors = await guarantorRepository.countMany();

        return countguarantors;
    },

    countExistsById: async (id: string): Promise<number> => {
        const countGuarantor = await guarantorRepository.countUniqueId(id);

        if (countGuarantor === 0) {
            throw new NotFoundException(`Guarantor with id ${id} not found`);
        }

        return countGuarantor;
    },

    countAllPreviousMonth: async () => {
        const countGuarantors =
            await guarantorRepository.countManyPreviousMonth();

        return countGuarantors;
    },

    countAllCurrentMonth: async () => {
        const countGuarantors =
            await guarantorRepository.countManyCurrentMonth();

        return countGuarantors;
    },

    getTrend: async (): Promise<{
        percentage: number;
        trend: Trend;
    }> => {
        const currentMonth = await guarantorRepository.countManyCurrentMonth();

        const previousMonth =
            await guarantorRepository.countManyPreviousMonth();

        if (previousMonth === 0) {
            return {
                percentage: currentMonth > 0 ? 100 : 0,
                trend: currentMonth > 0 ? 'increase' : 'same',
            };
        }

        const percentageChange =
            ((currentMonth - previousMonth) / previousMonth) * 100;

        const trend =
            percentageChange > 0
                ? 'increase'
                : percentageChange < 0
                  ? 'decrease'
                  : 'same';

        return {
            percentage: Number(percentageChange.toFixed(2)),
            trend,
        };
    },

    getStats: async (): Promise<StatsResponse> => {
        const length = await guarantorService.countAll();
        const trend = await guarantorService.getTrend();

        return { length, ...trend };
    },

    create: async (request: CreateGuarantorRequest): Promise<Guarantor> => {
        const validatedRequest: CreateGuarantorRequest = validateSchema(
            createGuarantorRequest,
            request,
        );

        const nationalIdExists =
            await guarantorRepository.countUniqueNationalId(
                validatedRequest.national_id,
            );

        if (nationalIdExists !== 0) {
            throw new BadRequestException('National id already exists');
        }

        const guarantor = await guarantorRepository.insert(validatedRequest);

        return toGuarantorResponse(guarantor!);
    },

    update: async (
        id: string,
        request: UpdateGuarantorRequest,
    ): Promise<Guarantor> => {
        await guarantorService.countExistsById(id);
        const validatedRequest: UpdateGuarantorRequest = validateSchema(
            updateGuarantorRequest,
            request,
        );
        const guarantorWithNationalIdExists =
            await guarantorRepository.findUniqueNationalId(
                validatedRequest.national_id ?? '',
            );

        if (
            guarantorWithNationalIdExists &&
            guarantorWithNationalIdExists.id !== id &&
            request.national_id === guarantorWithNationalIdExists.national_id
        ) {
            throw new BadRequestException('National id already exists');
        }

        const guarantor = await guarantorRepository.update(
            id,
            validatedRequest,
        );

        return toGuarantorResponse(guarantor!);
    },

    delete: async (id: string): Promise<{ id: string }> => {
        const guarantor =
            await guarantorService.getByIdWithCustomerRelations(id);

        if (guarantor.customer.guarantors.length === 1) {
            if (guarantor.customer.loan_reference) {
                throw new BadRequestException(
                    'Customer still has reference data that requires a guarantor',
                );
            }
        }

        await guarantorRepository.delete(id);

        return { id };
    },
};
