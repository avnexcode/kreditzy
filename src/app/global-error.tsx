'use client';
import { ErrorButton } from '~/components/elements/ErrorButton';

type GlobalErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

const GlobalError = ({ error, reset }: GlobalErrorProps) => {
    return (
        <html>
            <body>
                <main className="flex h-screen w-full flex-col items-center justify-center bg-zinc-50">
                    <h1 className="text-9xl font-extrabold tracking-widest text-zinc-900">
                        500
                    </h1>
                    <div className="absolute rotate-12 rounded bg-red-500 px-2 text-sm text-white">
                        Server Error
                    </div>
                    <ErrorButton label="Try Again!" onClick={reset} />
                    <p className="mt-8 text-center text-gray-500">
                        Our servers are taking a break. We&apos;ll be back up
                        and running shortly.
                    </p>
                </main>
            </body>
        </html>
    );
};

export default GlobalError;
