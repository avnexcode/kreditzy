import { type DefaultSession } from 'next-auth';
declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
            access_token: string;
        } & DefaultSession['user'];
    }

    interface User extends DefaultSession.user {
        image: string;
        access_token?: string;
        provider?: string;
    }

    interface JWT {
        image: string;
        access_token: string;
        provider: string;
    }
}
