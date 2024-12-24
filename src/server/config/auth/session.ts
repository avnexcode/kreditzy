import { type NextAuthConfig } from 'next-auth';

export const session: NextAuthConfig['session'] = {
    strategy: 'jwt',
    maxAge: 2 * 24 * 60 * 60,
};
