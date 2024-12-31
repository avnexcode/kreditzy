import { z } from 'zod';

const allowedEmailProviders: string[] = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
];

export const registerRequest = z.object({
    name: z.string().min(1).trim().toLowerCase(),
    email: z
        .string()
        .min(1)
        .email()
        .trim()
        .toLowerCase()
        .refine(email => {
            const domain = email.split('@')[1];
            return allowedEmailProviders.includes(domain!);
        }),
    password: z
        .string()
        .min(1)
        .min(8)
        .max(100)
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        )
        .optional(),
    provider: z.string(),
    image: z.string().optional(),
});

export const loginRequest = z.object({
    email: z
        .string()
        .min(1)
        .email()
        .trim()
        .toLowerCase()
        .refine(email => {
            const domain = email.split('@')[1];
            return allowedEmailProviders.includes(domain!);
        }),
    password: z.string().min(1).min(8),
});
