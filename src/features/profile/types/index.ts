import { type User } from '@prisma/client';
import { z } from 'zod';

export const updateProfileFormSchema = z.object({
    username: z
        .string()
        .min(1, { message: 'Username tidak boleh kosong' })
        .max(100, { message: 'Username tidak boleh lebih dari 100 karakter' }),
    name: z
        .string()
        .min(1, { message: 'Nama tidak boleh kosong' })
        .max(100, { message: 'Nama tidak boleh lebih dari 100 karakter' }),
    email: z
        .string()
        .min(1, { message: 'Email tidak boleh kosong' })
        .max(100, { message: 'Email tidak boleh lebih dari 100 karakter' })
        .email({ message: 'Format email tidak valid' }),
    phone: z
        .string()
        .max(20, {
            message: 'Nomor telepon tidak boleh lebih dari 20 karakter',
        })
        .optional(),
});

export type UpdateProfileFormSchema = z.infer<typeof updateProfileFormSchema>;
export type SafeUserResponse = Omit<User, 'password'>;
