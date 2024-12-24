import { z } from 'zod';

export const updateUserRequest = z.object({
    username: z.string(),
});
