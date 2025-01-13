import { type z } from 'zod';
import type {
    createCustomerRequest,
    updateCustomerRequest,
} from './customer.validation';
import { type Prisma } from '@prisma/client';

export type CreateCustomerRequest = z.infer<typeof createCustomerRequest>;
export type UpdateCustomerRequest = z.infer<typeof updateCustomerRequest>;

export type CustomerWithRelationsResponse = Prisma.CustomerGetPayload<{
    include: {
        guarantors: true;
        loan_reference: true;
        credit_worthiness: true;
        transaction: true;
    };
}>;
