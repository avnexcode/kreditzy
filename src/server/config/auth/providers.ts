import { type NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
export const providers: NextAuthConfig['providers'] = [
    CredentialsProvider({
        name: 'credentials',
        credentials: {
            email: { label: 'Email', type: 'text', placeholder: 'email' },
            password: {
                label: 'Password',
                type: 'password',
                placeholder: '********',
            },
        },
        authorize: async (credentials, req) => {
            if (!credentials?.email || !credentials?.password) {
                throw new Error('Email and password are required');
            }

            const { email, password } = credentials as {
                email: string;
                password: string;
            };

            const user = { email, password };

            if (user) console.log(user);

            throw new Error('Email or password is invalid');
        },
    }),
];
