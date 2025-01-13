import { validateSchema } from '~/server/service/validation.service';
import type {
    CreateGuarantorRequest,
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
    toGuarantorWithRelationsResponse,
} from './guarantor.response';

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
            throw new BadRequestException('National id already exists');
        }

        const guarantor = await guarantorRepository.insert(validatedRequest);

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
            throw new BadRequestException('National id already exists');
        }

        const guarantor = await guarantorRepository.update(
            id,
            validatedRequest,
        );

        return toGuarantorResponse(guarantor!);
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await guarantorService.getById(id);

        await guarantorRepository.delete(id);

        return { id };
    },
};
