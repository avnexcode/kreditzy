import { type z } from 'zod';
import type {
    calculatedLoanValues,
    createLoanReferenceRequest,
    updateLoanReferenceRequest,
} from './loan-reference.validation';
import { type Prisma } from '@prisma/client';

export type CreateLoanReferenceRequest = z.infer<
    typeof createLoanReferenceRequest
>;

export type UpdateLoanReferenceRequest = z.infer<
    typeof updateLoanReferenceRequest
>;

export type CalculatedLoanValues = z.infer<typeof calculatedLoanValues>;

export type LoanReferenceWithRelations = Prisma.LoanReferenceGetPayload<{
    include: {
        customer: true;
    };
}>;
