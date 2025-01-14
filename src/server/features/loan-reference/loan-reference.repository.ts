import { db } from '~/server/db/prisma';
import type {
    CalculatedLoanValues,
    CreateLoanReferenceRequest,
    LoanReferenceWithRelationsResponse,
    UpdateLoanReferenceRequest,
} from './loan-reference.model';
import { type LoanReference } from '@prisma/client';

export const loanReferenceRepository = {
    findMany: async (): Promise<LoanReferenceWithRelationsResponse[]> => {
        const loanReferences = await db.loanReference.findMany({
            include: {
                customer: true,
                credit_worthiness: true,
            },
        });

        return loanReferences;
    },

    findUniqueId: async (
        id: string,
    ): Promise<LoanReferenceWithRelationsResponse | null> => {
        const loanReference = await db.loanReference.findUnique({
            where: { id },
            include: { customer: true, credit_worthiness: true },
        });

        return loanReference;
    },

    findUniqueCustomerId: async (
        customer_id: string,
    ): Promise<LoanReferenceWithRelationsResponse | null> => {
        const loanReference = await db.loanReference.findUnique({
            where: { customer_id },
            include: {
                customer: true,
                credit_worthiness: true,
            },
        });

        return loanReference;
    },

    countMany: async (): Promise<number> => {
        const countLoanReferences = await db.loanReference.count();

        return countLoanReferences;
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

        const countLoanReferences = await db.loanReference.count({
            where: {
                created_at: {
                    gte: firstDayPrevMonth,
                    lte: lastDayPrevMonth,
                },
            },
        });

        return countLoanReferences;
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

        const countLoanReferences = await db.loanReference.count({
            where: {
                created_at: {
                    gte: firstDayCurrentMonth,
                    lte: lastDayCurrentMonth,
                },
            },
        });

        return countLoanReferences;
    },

    countUniqueId: async (id: string) => {
        const countLoanReference = await db.loanReference.count({
            where: { id },
        });

        return countLoanReference;
    },

    countUniqueCustomerId: async (customer_id: string): Promise<number> => {
        const countLoanReference = await db.loanReference.count({
            where: { customer_id },
        });

        return countLoanReference;
    },

    insert: async (
        request: CreateLoanReferenceRequest & CalculatedLoanValues,
    ): Promise<LoanReference> => {
        const loanReference = await db.loanReference.create({
            data: { ...request },
        });

        return loanReference;
    },

    insertMany: async (
        requests: (CreateLoanReferenceRequest & CalculatedLoanValues)[],
    ): Promise<number> => {
        const loanReference = await db.loanReference.createMany({
            data: { ...requests },
        });

        return loanReference.count;
    },

    update: async (
        id: string,
        request: UpdateLoanReferenceRequest & CalculatedLoanValues,
    ): Promise<LoanReference> => {
        const loanReference = await db.loanReference.update({
            where: { id },
            data: { ...request },
        });

        return loanReference;
    },

    delete: async (id: string): Promise<LoanReference> => {
        const loanReference = await db.loanReference.delete({ where: { id } });

        return loanReference;
    },
};
