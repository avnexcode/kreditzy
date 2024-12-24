import { type User } from '@prisma/client';
import type { SafeUserResponse } from '../features/user/user.model';

export const toUserResponse = (user: User): SafeUserResponse => ({
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    image: user.image,
    provider: user.provider,
    access_token: user.access_token,
    created_at: user.created_at,
    updated_at: user.updated_at,
});
