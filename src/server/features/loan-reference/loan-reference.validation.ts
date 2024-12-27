import { z } from 'zod';

export const createLoanReferenceRequest = z.object({
    monthly_income: z.string().min(1).max(100),
    monthly_expenses: z.string().min(1).max(100),
    employment_status: z.boolean(),
    previous_credit_history: z.boolean(),
    requested_loan_amount: z.string().min(1).max(100),
    collateral_estimate: z.string().min(1).max(100),
    loan_term: z.number().int().positive(),
    customer_id: z.string(),
});

export const updateLoanReferenceRequest = createLoanReferenceRequest.partial();

export const calculatedLoanValues = z.object({
    monthly_surplus: z.string().min(1).max(100),
    installment: z.string().min(1).max(100),
});
