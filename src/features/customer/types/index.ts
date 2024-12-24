import { z } from 'zod';

export const createCustomerFormSchema = z.object({
    name: z.string(),
});

export const updateCustomerFormSchema = createCustomerFormSchema.partial();

export type CreateCustomerFormSchema = z.infer<typeof createCustomerFormSchema>;
export type UpdateCustomerFormSchema = z.infer<typeof updateCustomerFormSchema>;
