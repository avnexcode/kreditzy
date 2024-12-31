import { type User } from '@prisma/client';
import { db } from '~/server/db/prisma';

export const resetPasswordRepository = {
    update: async (id: string, password: string): Promise<User> => {
        const user = await db.user.update({
            where: { id },
            data: { password },
        });

        return user;
    },
};
