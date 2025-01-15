import { Prisma } from '@prisma/client';
import {
    createTransactionRequest,
    loanReferenceRequest,
    updateTransactionRequest,
} from './transaction.validation';
import { z } from 'zod';

export type CreateTransactionRequest = z.infer<typeof createTransactionRequest>;
export type UpdateTransactionRequest = z.infer<typeof updateTransactionRequest>;
export type LoanReferenceRequest = z.infer<typeof loanReferenceRequest>;

export type TransactionWithRelationsResponse = Prisma.TransactionGetPayload<{
    include: {
        customer: true;
        payment_records: true;
        loan_balance: true;
    };
}>;
