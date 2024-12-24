import { type NextAuthConfig } from 'next-auth';

export const callbacks: NextAuthConfig['callbacks'] = {
    jwt: ({ token, account, profile, user }) => {
        if (account?.provider === 'credentials') {
            token.id = user.id;
            token.access_token = user.access_token;
            token.provider = user.provider;
        }

        return token;
    },

    session: ({ session, token }) => {
        if ('id' in token && 'access_token' in token) {
            session.user.id = token.id as string;
            session.user.access_token = token.access_token as string;
            session.user.provider = token.provider as string;
        }
        return session;
    },
};
