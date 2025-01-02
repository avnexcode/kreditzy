import { db } from '~/server/db/prisma';
import type {
    CreateCreditworthinessRequest,
    CreditWorthinessWithRelations,
    UpdateCreditworthinessRequest,
} from './credit-worthiness.model';
import { CreditWorthiness } from '@prisma/client';

export const creditWorthinessRepository = {
    findMany: async (): Promise<CreditWorthinessWithRelations[]> => {
        const creditWorthinesses = await db.creditWorthiness.findMany({
            include: {
                customer: true,
                loan_reference: true,
            },
        });

        return creditWorthinesses;
    },

    findUniqueId: async (
        id: string,
    ): Promise<CreditWorthinessWithRelations | null> => {
        const creditWorthiness = await db.creditWorthiness.findUnique({
            where: { id },
            include: {
                customer: true,
                loan_reference: true,
            },
        });

        return creditWorthiness;
    },

    findUniqueCustomerId: async (customer_id: string) => {
        const creditWorthiness = await db.creditWorthiness.findUnique({
            where: { customer_id },
        });
        return creditWorthiness;
    },

    findUniqueLoanReferenceId: async (loan_reference_id: string) => {
        const creditWorthiness = await db.creditWorthiness.findUnique({
            where: { loan_reference_id },
        });
        return creditWorthiness;
    },

    countMany: async (): Promise<number> => {
        const creditWorthinessesCount = await db.creditWorthiness.count();

        return creditWorthinessesCount;
    },

    countUniqueId: async (id: string): Promise<number> => {
        const creditWorthiness = await db.creditWorthiness.count({
            where: { id },
        });

        return creditWorthiness;
    },

    insert: async (
        request: CreateCreditworthinessRequest,
    ): Promise<CreditWorthiness> => {
        const creditWorthiness = await db.creditWorthiness.create({
            data: { ...request },
        });

        return creditWorthiness;
    },

    update: async (
        id: string,
        request: UpdateCreditworthinessRequest,
    ): Promise<CreditWorthiness> => {
        const creditWorthiness = await db.creditWorthiness.update({
            where: { id },
            data: { ...request },
        });

        return creditWorthiness;
    },

    delete: async (id: string): Promise<CreditWorthiness> => {
        const creditWorthiness = await db.creditWorthiness.delete({
            where: { id },
        });

        return creditWorthiness;
    },
};
