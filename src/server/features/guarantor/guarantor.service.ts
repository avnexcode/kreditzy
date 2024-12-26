import { validateSchema } from '~/server/service/validation.service';
import type {
    CreateGuarantorRequest,
    GuarantorWithRelations,
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
    toGuarantorWithRelationsResponse,
} from './guarantor.response';

export const guarantorService = {
    getAll: async (): Promise<GuarantorWithRelations[]> => {
        const response = await guarantorRepository.findMany();

        const guarantors = response?.map(guarantor =>
            toGuarantorWithRelationsResponse(guarantor),
        );

        return guarantors!;
    },

    getById: async (id: string): Promise<GuarantorWithRelations> => {
        const guarantor = await guarantorRepository.findUniqueId(id);

        if (!guarantor) {
            throw new NotFoundException(`guarantor with id ${id} not found`);
        }

        return toGuarantorWithRelationsResponse(guarantor);
    },

    countAll: async (): Promise<number> => {
        const countguarantors = await guarantorRepository.countMany();

        return countguarantors;
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
            throw new BadRequestException('National id already used');
        }

        const guarantor =
            await guarantorRepository.insertOnce(validatedRequest);

        return toGuarantorResponse(guarantor!);
    },

    update: async (
        id: string,
        request: UpdateGuarantorRequest,
    ): Promise<Guarantor> => {
        await guarantorService.getById(id);
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
            throw new BadRequestException('National id already used');
        }

        const guarantor = await guarantorRepository.updateOnce(
            id,
            validatedRequest,
        );

        return toGuarantorResponse(guarantor!);
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await guarantorService.getById(id);

        await guarantorRepository.deleteOnce(id);

        return { id };
    },
};