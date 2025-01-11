import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Auth - Register',
};

const AuthRegisterLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default AuthRegisterLayout;
