import { z } from 'zod';

export const createGuarantorFormSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Nama wajib diisi.' })
        .max(50, { message: 'Nama tidak boleh lebih dari 50 karakter.' }),
    national_id: z
        .string()
        .min(1, { message: 'Nomor identitas wajib diisi.' })
        .max(30, {
            message: 'Nomor identitas tidak boleh lebih dari 30 karakter.',
        }),
    id_card_address: z
        .string()
        .min(1, { message: 'Alamat pada kartu identitas wajib diisi.' })
        .max(100, {
            message:
                'Alamat pada kartu identitas tidak boleh lebih dari 100 karakter.',
        }),
    residential_address: z
        .string()
        .min(1, { message: 'Alamat tempat tinggal wajib diisi.' })
        .max(100, {
            message:
                'Alamat tempat tinggal tidak boleh lebih dari 100 karakter.',
        }),
    occupation: z
        .string()
        .min(1, { message: 'Pekerjaan wajib diisi.' })
        .max(100, {
            message: 'Pekerjaan tidak boleh lebih dari 100 karakter.',
        }),
    phone: z
        .string()
        .min(1, { message: 'Nomor telepon wajib diisi.' })
        .max(20, {
            message: 'Nomor telepon tidak boleh lebih dari 20 karakter.',
        }),
    customer_id: z.string().min(1, { message: 'ID pelanggan wajib diisi.' }),
});

export const updateGuarantorFormSchema = createGuarantorFormSchema;

export type CreateGuarantorFormSchema = z.infer<
    typeof createGuarantorFormSchema
>;
export type UpdateGuarantorFormSchema = z.infer<
    typeof updateGuarantorFormSchema
>;
