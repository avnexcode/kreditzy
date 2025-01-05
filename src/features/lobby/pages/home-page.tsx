import Link from 'next/link';
import { H1 } from '~/components/elements/Heading';
import { Container } from '~/components/layouts/Container';
import { currentUser } from '~/lib/auth';
import { SignOutButton } from '../../../components/actions/SignOutButton';
import Image from 'next/image';

export const HomePage = async () => {
    const user = await currentUser();
    return (
        <>
            <div className="relative w-full h-screen">
                <Image
                    src="https://res.cloudinary.com/dxwmdooxc/image/upload/v1736068205/kreditzy/vqag25ok8djl4671bxww.jpg"
                    alt="Kreditzy-hero"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                {user ? (
                    <H1 className="text-white">Hello, {user.name}</H1>
                ) : (
                    <H1>Hello World</H1>
                )}

                {user ? (
                    <>
                        <Link href={'/dashboard'} className="text-white">
                            Dashboard
                        </Link>
                        <SignOutButton />
                    </>
                ) : (
                    <Link href={'/login'}>Login</Link>
                )}
            </div>
        </>
    );
};
