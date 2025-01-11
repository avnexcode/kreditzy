import { Poppins } from 'next/font/google';
import '~/styles/globals.css';

import { type Metadata } from 'next';
import { Providers } from '~/components/layouts/Providers';
import { Toaster } from '~/components/ui/toaster';
import ErrorBoundary from '~/components/actions/ErrorBoundary';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: 'KrediTzy',
    description: "I Don't Know What I'am Building",
    icons: [
        { rel: 'icon', url: '/kreditzy-icon.png' },
        { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' }, // Optional: for iOS devices
    ],
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" className={`${poppins.variable}`}>
            <body>
                <ErrorBoundary>
                    <Providers>{children}</Providers>
                </ErrorBoundary>
                <Toaster />
            </body>
        </html>
    );
};

export default RootLayout;
