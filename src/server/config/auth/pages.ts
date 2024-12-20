import { type NextAuthConfig } from 'next-auth';

export const pages: NextAuthConfig['pages'] = {
    signIn: '/login',
};
