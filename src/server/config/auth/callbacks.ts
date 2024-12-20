import { type NextAuthConfig } from 'next-auth';

export const callbacks: NextAuthConfig['callbacks'] = {
    session: ({ session, user }) => ({
        ...session,
        user: {
            ...session.user,
            id: user.id,
        },
    }),
};
