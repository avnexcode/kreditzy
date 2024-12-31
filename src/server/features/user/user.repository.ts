import { type User } from '@prisma/client';
import { db } from '~/server/db/prisma';
import type { RegisterRequest } from '../auth/auth.model';
import { v4 as uuid } from 'uuid';
import type { UpdateUserRequest } from './user.model';

export const userRepository = {
    findMany: async (): Promise<User[]> => {
        const users = await db.user.findMany();
        return users;
    },

    findUniqueId: async (id: string): Promise<User | null> => {
        const user = await db.user.findUnique({
            where: { id },
        });
        return user;
    },

    findUniqueEmail: async (email: string): Promise<User | null> => {
        const user = await db.user.findUnique({
            where: { email },
        });
        return user;
    },

    countByEmail: async (email: string): Promise<number> => {
        const userCount = await db.user.count({
            where: { email },
        });
        return userCount;
    },

    insert: async (request: RegisterRequest): Promise<User> => {
        const id = uuid();
        const username = `user-${id.slice(0, 8)}`;

        const user = await db.user.create({
            data: { ...request, id, username },
        });
        return user;
    },

    update: async (id: string, request: UpdateUserRequest): Promise<User> => {
        const user = await db.user.update({
            where: { id },
            data: { ...request },
        });
        return user;
    },

    delete: async (id: string): Promise<User> => {
        const user = await db.user.delete({ where: { id } });
        return user;
    },
};
