import { Prisma } from '@prisma/client';
import { z } from 'zod';

export const createTransactionFormSchema = z.object({
    customer_id: z.string(),
});

export const updateTransactionFormSchema = createTransactionFormSchema;

export type CreateTransactionFormSchema = z.infer<
    typeof createTransactionFormSchema
>;

export type UpdateTransactionFormSchema = z.infer<
    typeof updateTransactionFormSchema
>;

export type TransactionWithRelations = Prisma.TransactionGetPayload<{
    include: {
        customer: true;
        LoanBalance: true;
        payment_records: true;
    };
}>;
