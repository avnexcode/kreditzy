import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Auth - Login',
};

const AuthLoginLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <>{children}</>;
};

export default AuthLoginLayout;
