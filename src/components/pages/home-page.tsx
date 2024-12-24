import Link from 'next/link';
import { H1 } from '~/components/elements/heading';
import { Container } from '~/components/layouts/Container';
import { currentUser } from '~/lib/auth';
import { SignOutButton } from '../elements/SignOutButton';

export const HomePage = async () => {
    const user = await currentUser();
    return (
        <Container>
            {user ? <H1>Hello, {user.name}</H1> : <H1>Hello World</H1>}

            {user ? (
                <>
                    <Link href={'/dashboard'}>Dashboard</Link>
                    <SignOutButton />
                </>
            ) : (
                <Link href={'/login'}>Login</Link>
            )}
        </Container>
    );
};
