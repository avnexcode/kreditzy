import { type Prisma } from '@prisma/client';
import { type z } from 'zod';
import type {
    createCreditWorthinessRequest,
    updateCreditWorthinessRequest,
} from './credit-worthiness.validation';

export type CreateCreditworthinessRequest = z.infer<
    typeof createCreditWorthinessRequest
>;
export type UpdateCreditworthinessRequest = z.infer<
    typeof updateCreditWorthinessRequest
>;

export type CreditWorthinessWithRelationsResponse =
    Prisma.CreditWorthinessGetPayload<{
        include: {
            customer: true;
            loan_reference: true;
        };
    }>;
