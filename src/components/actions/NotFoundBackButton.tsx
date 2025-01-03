'use client';
import { useRouter } from 'next/navigation';
import { ErrorButton } from '../elements/ErrorButton';

export const NotFoundBackButton = () => {
    const router = useRouter();
    return <ErrorButton label="Go Back!" onClick={() => router.back()} />;
};
