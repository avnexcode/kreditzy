import { validateSchema } from '~/server/service/validation.service';
import { creditWorthinessRepository } from './credit-worthiness.repository';
import { type CreditWorthiness } from '@prisma/client';
import type {
    CreateCreditworthinessRequest,
    CreditWorthinessWithRelations,
    UpdateCreditworthinessRequest,
} from './credit-worthiness.model';

import {
    createCreditWorthinessRequest,
    updateCreditWorthinessRequest,
} from './credit-worthiness.validation';
import { NotFoundException } from '~/server/helper/error.exception';

export const creditWorthinessService = {
    getAll: async (): Promise<CreditWorthinessWithRelations[]> => {
        const creditWorthiness = await creditWorthinessRepository.findMany();

        return creditWorthiness;
    },

    getById: async (id: string): Promise<CreditWorthinessWithRelations> => {
        const creditWorthiness =
            await creditWorthinessRepository.findUniqueId(id);

        if (!creditWorthiness) {
            throw new NotFoundException(
                `Kelayakan kredit dengan id ${id} tidak ditemukan`,
            );
        }
        return creditWorthiness;
    },

    countAll: async (): Promise<number> => {
        const creditWorthinessesCount =
            await creditWorthinessRepository.countMany();

        return creditWorthinessesCount;
    },

    countById: async (id: string): Promise<number> => {
        const creditWorthiness =
            await creditWorthinessRepository.countUniqueId(id);

        return creditWorthiness;
    },

    create: async (
        request: CreateCreditworthinessRequest,
    ): Promise<CreditWorthiness> => {
        const validatedRequest: CreateCreditworthinessRequest = validateSchema(
            createCreditWorthinessRequest,
            request,
        );

        const creditWorthiness =
            await creditWorthinessRepository.insert(validatedRequest);

        return creditWorthiness;
    },

    update: async (
        id: string,
        request: UpdateCreditworthinessRequest,
    ): Promise<CreditWorthiness> => {
        const validatedRequest: UpdateCreditworthinessRequest = validateSchema(
            updateCreditWorthinessRequest,
            request,
        );

        const creditWorthiness = await creditWorthinessRepository.update(
            id,
            validatedRequest,
        );

        return creditWorthiness;
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await creditWorthinessRepository.delete(id);
        return { id };
    },
};
