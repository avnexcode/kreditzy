import { db } from '~/server/db/prisma';
import {
    CreateTransactionRequest,
    LoanReferenceRequest,
    TransactionWithRelationsResponse,
    UpdateTransactionRequest,
} from './transaction.model';
import { Transaction } from '@prisma/client';

export const transactionRepository = {
    findMany: async (): Promise<TransactionWithRelationsResponse[]> => {
        const transactions = await db.transaction.findMany({
            include: {
                customer: true,
                payment_records: true,
            },
        });

        return transactions;
    },

    countMany: async (): Promise<number> => {
        const transactionsCount = await db.transaction.count();

        return transactionsCount;
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

        const countTransactions = await db.transaction.count({
            where: {
                created_at: {
                    gte: firstDayPrevMonth,
                    lte: lastDayPrevMonth,
                },
            },
        });

        return countTransactions;
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

        const countTransactions = await db.transaction.count({
            where: {
                created_at: {
                    gte: firstDayCurrentMonth,
                    lte: lastDayCurrentMonth,
                },
            },
        });

        return countTransactions;
    },

    findUniqueId: async (
        id: string,
    ): Promise<TransactionWithRelationsResponse | null> => {
        const transaction = await db.transaction.findUnique({
            where: { id },
            include: {
                customer: true,
                payment_records: true,
            },
        });

        return transaction;
    },

    findUniqueCustomerId: async (
        customer_id: string,
    ): Promise<TransactionWithRelationsResponse | null> => {
        const transaction = await db.transaction.findUnique({
            where: { customer_id },
            include: { customer: true, payment_records: true },
        });

        return transaction;
    },

    findUniqueLoanReferenceId: async (
        loan_reference_id: string,
    ): Promise<TransactionWithRelationsResponse | null> => {
        const transaction = await db.transaction.findUnique({
            where: { loan_reference_id },
            include: { customer: true, payment_records: true },
        });

        return transaction;
    },

    countUniqueId: async (id: string): Promise<number> => {
        const transactionCount = await db.transaction.count({ where: { id } });

        return transactionCount;
    },

    countUniqueCustomerId: async (customer_id: string): Promise<number> => {
        const transactionCount = await db.transaction.count({
            where: { customer_id },
        });

        return transactionCount;
    },

    insert: async (
        request: CreateTransactionRequest & LoanReferenceRequest,
    ): Promise<Transaction> => {
        const transaction = await db.transaction.create({
            data: { ...request },
        });

        return transaction;
    },

    update: async (
        id: string,
        request: UpdateTransactionRequest,
    ): Promise<Transaction> => {
        const transaction = await db.transaction.update({
            where: { id },
            data: { ...request },
        });

        return transaction;
    },

    delete: async (id: string): Promise<Transaction> => {
        const transaction = await db.transaction.delete({ where: { id } });

        return transaction;
    },
};
