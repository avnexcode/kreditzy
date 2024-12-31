import type { User } from '@prisma/client';
import { type z } from 'zod';
import type { updateUserRequest } from './user.validation';

export type UpdateUserRequest = z.infer<typeof updateUserRequest>;

export type SafeUserResponse = Omit<User, 'password'>;
