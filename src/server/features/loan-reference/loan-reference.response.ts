import { type LoanReference } from '@prisma/client';
import type { LoanReferenceWithRelationsResponse } from './loan-reference.model';

export const toLoanReferenceResponses = (
    loanReference: LoanReference,
): LoanReference => ({
    id: loanReference.id,
    monthly_income: loanReference.monthly_income,
    monthly_expenses: loanReference.monthly_expenses,
    monthly_surplus: loanReference.monthly_surplus,
    employment_status: loanReference.employment_status,
    previous_credit_history: loanReference.previous_credit_history,
    requested_loan_amount: loanReference.requested_loan_amount,
    collateral_estimate: loanReference.collateral_estimate,
    loan_term: loanReference.loan_term,
    installment: loanReference.installment,
    customer_id: loanReference.customer_id,
    created_at: loanReference.created_at,
    updated_at: loanReference.updated_at,
});

export const toLoanReferenceWithRelationsResponse = (
    loanReference: LoanReferenceWithRelationsResponse,
): LoanReferenceWithRelationsResponse => ({
    ...toLoanReferenceResponses(loanReference),
    customer: loanReference.customer,
    credit_worthiness: loanReference.credit_worthiness,
});
