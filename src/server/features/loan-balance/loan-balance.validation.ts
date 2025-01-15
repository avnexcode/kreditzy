import { z } from 'zod';
export const createLoanBalanceRequest = z.object({
    remaining_loan_amount: z
        .string()
        .regex(/^\d+$/, 'Must be a number')
        .min(1)
        .max(100),
    remaining_total_amount: z
        .string()
        .regex(/^\d+$/, 'Must be a number')
        .min(1)
        .max(100),
    interest_due: z.string().regex(/^\d+$/, 'Must be a number').min(1).max(100),
    total_paid: z.string().regex(/^\d+$/, 'Must be a number').min(1).max(100),
    last_payment_date: z
        .date()
        .min(new Date())
        .refine(date => {
            const now = new Date();
            const maxDate = new Date();
            maxDate.setFullYear(now.getFullYear() + 5);
            return date <= maxDate;
        }, 'max 5 years')
        .optional(),
    next_due_date: z
        .date()
        .min(new Date())
        .refine(date => {
            const now = new Date();
            const maxDate = new Date();
            maxDate.setFullYear(now.getFullYear() + 5);
            return date <= maxDate;
        }, 'max 5 years'),
    transaction_id: z.string(),
});

export const updateLoanBalanceRequest = createLoanBalanceRequest.partial();
