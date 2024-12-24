import { SessionProvider } from 'next-auth/react';
import { TanstackProvider } from './providers/TanstackProvider';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <SessionProvider>
            <TanstackProvider>{children}</TanstackProvider>
        </SessionProvider>
    );
};
