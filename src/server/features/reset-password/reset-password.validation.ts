import { z } from 'zod';

export const resetPasswordRequest = z.object({
    password: z.string().min(1).min(8),
    new_password: z
        .string()
        .min(1)
        .min(8)
        .max(100)
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        ),
});
