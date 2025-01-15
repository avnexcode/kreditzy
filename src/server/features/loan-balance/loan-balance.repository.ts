import { db } from '~/server/db/prisma';
import {
    CreateLoanBalanceRequest,
    LoanBalanceWithRelationsResponse,
    UpdateLoanBalanceRequest,
} from './loan-balance.model';
import { LoanBalance } from '@prisma/client';

export const loanBalanceRepository = {
    findMany: async (): Promise<LoanBalanceWithRelationsResponse[]> => {
        const loanBalances = await db.loanBalance.findMany({
            include: {
                transaction: true,
            },
        });

        return loanBalances;
    },

    findUniqueId: async (
        id: string,
    ): Promise<LoanBalanceWithRelationsResponse | null> => {
        const loanBalance = await db.loanBalance.findUnique({
            where: { id },
            include: {
                transaction: true,
            },
        });

        return loanBalance;
    },

    findUniqueTransactionId: async (
        transaction_id: string,
    ): Promise<LoanBalanceWithRelationsResponse | null> => {
        const loanBalance = await db.loanBalance.findUnique({
            where: { transaction_id },
            include: {
                transaction: true,
            },
        });

        return loanBalance;
    },

    countMany: async (): Promise<number> => {
        const countLoanBalances = await db.loanBalance.count({});

        return countLoanBalances;
    },

    countUniqueId: async (id: string): Promise<number> => {
        const countLoanBalance = await db.loanBalance.count({ where: { id } });

        return countLoanBalance;
    },

    countUniqueTransactionId: async (
        transaction_id: string,
    ): Promise<number> => {
        const countLoanBalance = await db.loanBalance.count({
            where: { transaction_id },
        });

        return countLoanBalance;
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

        const loanBalances = await db.guarantor.count({
            where: {
                created_at: {
                    gte: firstDayPrevMonth,
                    lte: lastDayPrevMonth,
                },
            },
        });

        return loanBalances;
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

        const loanBalances = await db.guarantor.count({
            where: {
                created_at: {
                    gte: firstDayCurrentMonth,
                    lte: lastDayCurrentMonth,
                },
            },
        });

        return loanBalances;
    },

    insert: async (request: CreateLoanBalanceRequest): Promise<LoanBalance> => {
        const loanBalance = await db.loanBalance.create({
            data: { ...request },
        });

        return loanBalance;
    },

    update: async (
        id: string,
        request: UpdateLoanBalanceRequest,
    ): Promise<LoanBalance> => {
        const loanBalance = await db.loanBalance.update({
            where: { id },
            data: { ...request },
        });

        return loanBalance;
    },

    delete: async (id: string): Promise<LoanBalance> => {
        const loanBalance = await db.loanBalance.delete({ where: { id } });

        return loanBalance;
    },
};
