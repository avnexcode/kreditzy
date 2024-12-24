import { type DefaultSession } from 'next-auth';
declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string;
            access_token: string;
        } & DefaultSession['user'];
    }
    interface User extends DefaultSession.user {
        access_token: string;
        image: string;
        provider: string;
    }

    interface JWT {
        access_token: string;
        image: string;
        provider: string;
    }
}
