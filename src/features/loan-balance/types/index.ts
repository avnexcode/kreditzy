import { Prisma } from '@prisma/client';

export type LoanBalanceWithRelations = Prisma.LoanBalanceGetPayload<{
    include: {
        transaction: true;
    };
}>;
