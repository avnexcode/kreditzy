import { type z } from 'zod';
import type {
    createCustomerRequest,
    updateCustomerRequest,
} from './customer.validation';
import { Prisma } from '@prisma/client';

export type CreateCustomerRequest = z.infer<typeof createCustomerRequest>;
export type UpdateCustomerRequest = z.infer<typeof updateCustomerRequest>;

export type CustomerWithRelations = Prisma.CustomerGetPayload<{
    include: {
        guarantors: true;
        loan_references: true;
        credit_worthiness: true;
    };
}>;
