import { LoanBalance } from '@prisma/client';
import { LoanBalanceWithRelationsResponse } from './loan-balance.model';

export const toLoanBalanceResponse = (
    loanBalance: LoanBalance,
): LoanBalance => ({});

export const toLoanBalanceWithRelationsResponse = (
    loanBalance: LoanBalanceWithRelationsResponse,
): LoanBalanceWithRelationsResponse => ({
    ...toLoanBalanceResponse(),
});
