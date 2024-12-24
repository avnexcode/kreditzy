import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Auth - Login',
};

export { LoginPage as default } from '~/features/auth/pages/login-page';
