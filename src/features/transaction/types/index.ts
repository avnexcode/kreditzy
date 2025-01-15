import { Prisma } from '@prisma/client';
import { z } from 'zod';

export const createTransactionFormSchema = z.object({
    customer_id: z.string(),
});

export const updateTransactionFormSchema = createTransactionFormSchema.extend({
    transaction_status: z
        .enum(['ACTIVE', 'PAID', 'CANCELED', 'OVERDUE'])
        .optional(),
});

export type CreateTransactionFormSchema = z.infer<
    typeof createTransactionFormSchema
>;

export type UpdateTransactionFormSchema = z.infer<
    typeof updateTransactionFormSchema
>;

export type TransactionWithRelations = Prisma.TransactionGetPayload<{
    include: {
        customer: true;
        loan_balance: true;
        payment_records: true;
    };
}>;
