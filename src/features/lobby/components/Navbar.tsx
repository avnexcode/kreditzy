import Link from 'next/link';
import { currentUser } from '~/lib/auth';
import AnimatedShinyText from '~/components/ui/animated-shiny-text';
import InteractiveHoverButton from '~/components/ui/interactive-hover-button';
import { SignOutButton } from '~/components/actions/SignOutButton';
import FlipText from '~/components/ui/flip-text';

export const Navbar = async () => {
    const user = await currentUser();

    return (
        <nav className="flex items-center justify-end px-10 py-3">
            {user ? (
                <div className="flex gap-3 items-center">
                    <DashboardLink />
                    <SignOutButton />
                </div>
            ) : (
                <LoginLink />
            )}
        </nav>
    );
};

const DashboardLink = () => (
    <div className="z-10 flex items-center justify-center">
        <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <Link href="/dashboard">
                <AnimatedShinyText
                    className="inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                    shimmerWidth={100}
                >
                    <FlipText word="✨Dashboard" className="font-bold" />
                </AnimatedShinyText>
            </Link>
        </div>
    </div>
);

const LoginLink = () => (
    <Link href="/login" className="z-50">
        <div className="relative justify-center">
            <InteractiveHoverButton text="Login" />
        </div>
    </Link>
);
