import { Suspense } from 'react';
import { Container } from './Container';
import { AuthSkeleton } from '~/features/auth/components/AuthSkeleton';

type AuthLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({
    children,
    className,
}) => {
    return (
        <Container
            className={`flex min-h-screen max-h-screen items-center justify-center ${className}`}
        >
            <Suspense fallback={<AuthSkeleton />}>{children}</Suspense>
        </Container>
    );
};
