import { type User } from '@prisma/client';
import { db } from '~/server/db/prisma';
import type { RegisterRequest } from '../auth/auth.model';
import { v4 as uuid } from 'uuid';

export const userRepository = {
    findMany: async (): Promise<User[]> => {
        const users = await db.user.findMany();
        return users;
    },

    findUniqueById: async (id: string): Promise<User | null> => {
        const user = await db.user.findUnique({
            where: { id },
        });
        return user;
    },

    findUniqueByEmail: async (email: string): Promise<User | null> => {
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

    insertOnce: async (request: RegisterRequest): Promise<User> => {
        const id = uuid();
        const username = `user-${id.slice(0, 8)}`;

        const user = await db.user.create({
            data: { ...request, id, username },
        });
        return user;
    },

    updateOnce: async (id: string, request: Partial<User>): Promise<User> => {
        const user = await db.user.update({
            where: { id },
            data: { ...request },
        });
        return user;
    },

    deleteOnce: async (id: string): Promise<User> => {
        const user = await db.user.delete({ where: { id } });
        return user;
    },
};
