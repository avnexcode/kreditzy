import { Poppins } from 'next/font/google';
import '~/styles/globals.css';

import { type Metadata } from 'next';
import { Providers } from '~/components/layouts/Providers';
import { Toaster } from '~/components/ui/toaster';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
    title: 'KrediTzy',
    description: "I Don't Know What I'am Building",
    icons: [
        { rel: 'icon', url: '/favicon.ico' },
        { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' }, // Optional: for iOS devices
    ],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${poppins.variable}`}>
            <body>
                <Providers>{children}</Providers>
                <Toaster />
            </body>
        </html>
    );
}
