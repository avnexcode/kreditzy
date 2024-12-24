'use client';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
    const router = useRouter();

    return (
        <main className="flex h-screen w-full flex-col items-center justify-center bg-white">
            <h1 className="text-9xl font-extrabold tracking-widest text-gray-900">
                404
            </h1>
            <div className="absolute rotate-12 rounded bg-red-500 px-2 text-sm text-white">
                Page Not Found
            </div>
            <button
                onClick={() => router.back()}
                className="mt-5 group relative inline-block text-sm font-medium text-red-500 focus:outline-none active:text-red-500"
            >
                <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-red-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
                <span className="relative block border border-current bg-white px-8 py-3">
                    Go Back
                </span>
            </button>
            <p className="mt-8 text-center text-gray-500">
                Looks like you&apos;ve found the doorway to the great nothing
            </p>
        </main>
    );
};

export default NotFoundPage;
