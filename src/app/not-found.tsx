import { NotFoundBackButton } from '~/components/actions/NotFoundBackButton';

const NotFoundPage = () => {
    return (
        <main className="flex h-screen w-full flex-col items-center justify-center bg-white">
            <h1 className="text-9xl font-extrabold tracking-widest text-gray-900">
                404
            </h1>
            <div className="absolute rotate-12 rounded bg-red-500 px-2 text-sm text-white">
                Page Not Found
            </div>
            <NotFoundBackButton />
            <p className="mt-8 text-center text-gray-500">
                Looks like you&apos;ve found the doorway to the great nothing
            </p>
        </main>
    );
};

export default NotFoundPage;
