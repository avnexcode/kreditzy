import { z } from 'zod';

export const createCreditWorthinessRequest = z.object({
    status: z.boolean(),
    customer_id: z.string(),
    loan_reference_id: z.string(),
});

export const updateCreditWorthinessRequest =
    createCreditWorthinessRequest.partial();
