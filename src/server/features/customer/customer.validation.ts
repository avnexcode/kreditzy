import { z } from 'zod';

export const createCustomerRequest = z.object({
    name: z.string().min(1).max(50).toLowerCase(),
    national_id: z.string().regex(/^\d+$/, 'Must be a number').min(1).max(30),
    id_card_address: z.string().min(1).max(100).toLowerCase(),
    residential_address: z.string().min(1).max(100).toLowerCase(),
    occupation: z.string().min(1).max(100),
    phone: z.string().regex(/^\d+$/, 'Must be a number').min(1).max(20),
});

export const updateCustomerRequest = createCustomerRequest.partial();
