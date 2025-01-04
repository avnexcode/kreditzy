import { type User, type NextAuthConfig } from 'next-auth';
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

        authorize: async credentials => {
            // params req after credentials
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

            if (user)
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    access_token: user.access_token,
                    provider: user.provider,
                } as User;

            throw new BadRequestException('Email or password is invalid');
        },
    }),
];
