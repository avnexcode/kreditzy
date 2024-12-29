import { type Prisma } from '@prisma/client';
import { type z } from 'zod';
import type {
    createCreditWorthinessRequest,
    updateCreditWorthinessRequest,
} from './credit-worthiness.validation';

export type CreditWorthinessWithRelations = Prisma.CreditWorthinessGetPayload<{
    include: {
        customer: true;
    };
}>;

export type CreateCreditworthinessRequest = z.infer<
    typeof createCreditWorthinessRequest
>;
export type UpdateCreditworthinessRequest = z.infer<
    typeof updateCreditWorthinessRequest
>;
