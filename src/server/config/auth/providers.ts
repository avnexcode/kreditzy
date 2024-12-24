import { type NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authService } from '~/server/features/auth/auth.service';
import { BadRequestException } from '~/server/helper/error.exception';
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
                throw new BadRequestException(
                    'Email and password are required',
                );
            }

            const { email, password } = credentials as {
                email: string;
                password: string;
            };

            const user = await authService.login({ email, password });

            if (user) return user;

            throw new BadRequestException('Email or password is invalid');
        },
    }),
];
