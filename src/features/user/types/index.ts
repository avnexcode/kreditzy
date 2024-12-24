import { type User } from '@prisma/client';

export type SafeUserResponse = Omit<User, 'password'>;
