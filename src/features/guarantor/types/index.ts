import { z } from 'zod';

export const createGuarantorFormSchema = z.object({
    name: z.string().min(1).max(50),
    national_id: z.string().min(1).max(30),
    id_card_address: z.string().min(1).max(100),
    residential_address: z.string().min(1).max(100),
    occupation: z.string().min(1).max(100),
    phone: z.string().min(1).max(20),
    customer_id: z.string(),
});

export const updateGuarantorFormSchema = createGuarantorFormSchema.partial();

export type CreateGuarantorFormSchema = z.infer<
    typeof createGuarantorFormSchema
>;
export type UpdateGuarantorFormSchema = z.infer<
    typeof updateGuarantorFormSchema
>;
