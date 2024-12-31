import { z } from 'zod';

export const updateUserRequest = z
    .object({
        username: z.string().min(1).max(100),
        name: z.string().min(1).max(100),
        email: z.string().min(1).max(100),
        phone: z.string().min(1).max(20),
    })
    .partial();
