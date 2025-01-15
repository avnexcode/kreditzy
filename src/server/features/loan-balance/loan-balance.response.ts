import { LoanBalance } from '@prisma/client';
import { LoanBalanceWithRelationsResponse } from './loan-balance.model';

export const toLoanBalanceResponse = (
    loanBalance: LoanBalance,
): LoanBalance => ({
    id: loanBalance.id,
    remaining_loan_amount: loanBalance.remaining_loan_amount,
    interest_due: loanBalance.interest_due,
    remaining_total_amount: loanBalance.remaining_total_amount,
    total_paid: loanBalance.total_paid,
    last_payment_date: loanBalance.last_payment_date,
    next_due_date: loanBalance.next_due_date,
    transaction_id: loanBalance.transaction_id,
    created_at: loanBalance.created_at,
    updated_at: loanBalance.updated_at,
});

export const toLoanBalanceWithRelationsResponse = (
    loanBalance: LoanBalanceWithRelationsResponse,
): LoanBalanceWithRelationsResponse => ({
    ...toLoanBalanceResponse(loanBalance),
    transaction: loanBalance.transaction,
});
