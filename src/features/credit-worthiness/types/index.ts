import { type Prisma } from '@prisma/client';

export type CreditWorthinessWithRelations = Prisma.CreditWorthinessGetPayload<{
    include: {
        customer: true;
        loan_reference: true;
    };
}>;
