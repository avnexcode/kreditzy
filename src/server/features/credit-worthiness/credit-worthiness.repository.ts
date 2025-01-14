import { db } from '~/server/db/prisma';
import type {
    CreateCreditworthinessRequest,
    CreditWorthinessWithRelationsResponse,
    UpdateCreditworthinessRequest,
} from './credit-worthiness.model';
import { type CreditWorthiness } from '@prisma/client';

export const creditWorthinessRepository = {
    findMany: async (): Promise<CreditWorthinessWithRelationsResponse[]> => {
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
    ): Promise<CreditWorthinessWithRelationsResponse | null> => {
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
            include: {
                customer: true,
                loan_reference: true,
            },
        });

        return creditWorthiness;
    },

    findUniqueLoanReferenceId: async (loan_reference_id: string) => {
        const creditWorthiness = await db.creditWorthiness.findUnique({
            where: { loan_reference_id },
            include: {
                customer: true,
                loan_reference: true,
            },
        });

        return creditWorthiness;
    },

    countMany: async (): Promise<number> => {
        const creditWorthinessesCount = await db.creditWorthiness.count();

        return creditWorthinessesCount;
    },

    countManyPreviousMonth: async (): Promise<number> => {
        const today = new Date();
        const firstDayPrevMonth = new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            1,
        );
        const lastDayPrevMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0,
        );

        const countCustomers = await db.creditWorthiness.count({
            where: {
                created_at: {
                    gte: firstDayPrevMonth,
                    lte: lastDayPrevMonth,
                },
            },
        });

        return countCustomers;
    },

    countManyCurrentMonth: async (): Promise<number> => {
        const today = new Date();
        const firstDayCurrentMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            1,
        );
        const lastDayCurrentMonth = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            0,
        );

        const countCustomers = await db.creditWorthiness.count({
            where: {
                created_at: {
                    gte: firstDayCurrentMonth,
                    lte: lastDayCurrentMonth,
                },
            },
        });

        return countCustomers;
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
