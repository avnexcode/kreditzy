import { Navbar } from '~/features/lobby/components/Navbar';
import AnimatedGridPattern from '../ui/animated-grid-pattern';
import { cn } from '~/lib/utils';
import { Footer } from '../elements/Footer';

type LobbyContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const LobbyContainer: React.FC<LobbyContainerProps> = ({
    children,
    className,
}) => {
    return (
        <div className={`${className}`}>
            <div className="flex-1 relative w-full overflow-hidden border bg-background md:shadow-xl">
                <Navbar />

                <div className="z-10 flex min-h-[calc(100vh-64px-64px)] flex-col items-center justify-center gap-8 p-8">
                    {children}
                </div>

                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.4}
                    duration={0.8}
                    repeatDelay={1}
                    width={60}
                    height={60}
                    className={cn(
                        '[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]',
                        'fixed inset-0 h-full w-full skew-y-12',
                    )}
                />
                <Footer />
            </div>
        </div>
    );
};
