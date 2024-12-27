import { db } from '~/server/db/prisma';
import type {
    CalculatedLoanValues,
    CreateLoanReferenceRequest,
    LoanReferenceWithRelations,
    UpdateLoanReferenceRequest,
} from './loan-reference.model';
import { type LoanReference } from '@prisma/client';

export const loanReferenceRepository = {
    findMany: async (): Promise<LoanReferenceWithRelations[]> => {
        const loanReferences = await db.loanReference.findMany({
            include: {
                customer: true,
            },
        });

        return loanReferences;
    },

    findUniqueId: async (
        id: string,
    ): Promise<LoanReferenceWithRelations | null> => {
        const loanReference = await db.loanReference.findUnique({
            where: { id },
            include: { customer: true },
        });

        return loanReference;
    },

    countMany: async (): Promise<number> => {
        const countLoanReferences = await db.loanReference.count();

        return countLoanReferences;
    },

    countUniqueId: async (id: string) => {
        const countLoanReference = await db.loanReference.count({
            where: { id },
        });

        return countLoanReference;
    },

    insertOnce: async (
        request: CreateLoanReferenceRequest & CalculatedLoanValues,
    ): Promise<LoanReference> => {
        const loanReference = await db.loanReference.create({
            data: { ...request },
        });

        return loanReference;
    },

    updateOnce: async (
        id: string,
        request: UpdateLoanReferenceRequest & CalculatedLoanValues,
    ): Promise<LoanReference> => {
        const loanReference = await db.loanReference.update({
            where: { id },
            data: { ...request },
        });

        return loanReference;
    },

    deleteOnce: async (id: string): Promise<LoanReference> => {
        const loanReference = await db.loanReference.delete({ where: { id } });

        return loanReference;
    },
};
