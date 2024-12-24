import { type User } from '@prisma/client';

export const toUserResponse = (user: User): Omit<User, 'password'> => ({
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    image: user.image,
    access_token: user.access_token,
    created_at: user.created_at,
    updated_at: user.updated_at,
});
