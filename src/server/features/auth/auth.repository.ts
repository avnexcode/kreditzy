import { type User } from '@prisma/client';
import { db } from '~/server/db/prisma';
import { jwtService } from '~/server/service/jwt.service';
import type { JWTPayload } from '~/server/types/jwt';

export const authRepository = {
    setAccessToken: async (email: string): Promise<User | null> => {
        const userExists = await db.user.findUnique({ where: { email } });

        const payload = {
            id: userExists?.id,
        } as JWTPayload;

        const access_token = await jwtService.createToken(payload, 24);

        const user = await db.user.update({
            where: { email },
            data: { access_token },
        });
        return user;
    },

    removeAccessToken: async (userId: string): Promise<User | null> => {
        const user = await db.user.update({
            where: { id: userId },
            data: { access_token: null },
        });
        return user;
    },
};
