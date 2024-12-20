import { type DefaultSession, type NextAuthConfig } from 'next-auth';
import { providers } from './providers';
import { adapter } from './adapter';
import { callbacks } from './callbacks';
import { pages } from './pages';

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
        } & DefaultSession['user'];
    }
}

export const authConfig = {
    providers,
    adapter,
    callbacks,
    pages,
} satisfies NextAuthConfig;
