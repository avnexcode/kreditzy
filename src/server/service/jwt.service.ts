import * as jose from 'jose';
import type { JWTPayload } from '../types/jwt';
import { env } from 'process';
import { UnauthorizedException } from '../helper/error.exception';

export const jwtService = {
    createToken: async (
        payload: JWTPayload,
        expired: number,
    ): Promise<string> => {
        const secret = new TextEncoder().encode(env.AUTH_SECRET);

        if (!secret) throw new UnauthorizedException('Missing token or secret');

        const token = await new jose.SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime(`${expired}h`)
            .sign(secret);

        return token;
    },

    verifyToken: async (token: string): Promise<JWTPayload> => {
        const secret = new TextEncoder().encode(env.AUTH_SECRET);

        if (!secret) throw new UnauthorizedException('Missing token or secret');

        const { payload } = await jose.jwtVerify(token, secret);

        return payload as JWTPayload;
    },
};
