import { z } from 'zod';
import {
    createLoanBalanceRequest,
    updateLoanBalanceRequest,
} from './loan-balance.validation';
import { Prisma } from '@prisma/client';

export type CreateLoanBalanceRequest = z.infer<typeof createLoanBalanceRequest>;
export type UpdateLoanBalanceRequest = z.infer<typeof updateLoanBalanceRequest>;

export type LoanBalanceWithRelationsResponse = Prisma.LoanBalanceGetPayload<{
    include: {
        transaction: true;
    };
}>;
