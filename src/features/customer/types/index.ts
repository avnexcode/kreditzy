import { z } from 'zod';

export const createCustomerFormSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Nama wajib diisi' })
        .max(50, { message: 'Nama tidak boleh lebih dari 50 karakter' })
        .toLowerCase(),
    national_id: z
        .string()
        .min(1, { message: 'NIK wajib diisi' })
        .max(30, { message: 'NIK tidak boleh lebih dari 30 karakter' }),
    id_card_address: z
        .string()
        .min(1, { message: 'Alamat KTP wajib diisi' })
        .max(100, { message: 'Alamat KTP tidak boleh lebih dari 100 karakter' })
        .toLowerCase(),
    residential_address: z
        .string()
        .min(1, { message: 'Alamat tinggal wajib diisi' })
        .max(100, {
            message: 'Alamat tinggal tidak boleh lebih dari 100 karakter',
        })
        .toLowerCase(),
    occupation: z
        .string()
        .min(1, { message: 'Pekerjaan wajib diisi' })
        .max(100, { message: 'Pekerjaan tidak boleh lebih dari 100 karakter' }),
    phone: z.string().min(1, { message: 'Nomor telepon wajib diisi' }).max(20, {
        message: 'Nomor telepon tidak boleh lebih dari 20 karakter',
    }),
});
export const updateCustomerFormSchema = createCustomerFormSchema.partial();

export type CreateCustomerFormSchema = z.infer<typeof createCustomerFormSchema>;
export type UpdateCustomerFormSchema = z.infer<typeof updateCustomerFormSchema>;
