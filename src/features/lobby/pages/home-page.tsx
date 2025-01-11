import Image from 'next/image';
import { LobbyContainer } from '~/components/layouts/LobbyContainer';
import { BorderBeam } from '~/components/ui/border-beam';
import Meteors from '~/components/ui/meteors';
import MorphingText from '~/components/ui/morphing-text';
import Particles from '~/components/ui/particles';

export const HomePage = () => {
    return (
        <LobbyContainer className="min-h-screen max-h-screen overflow-hidden">
            <div className="z-50 w-full flex justify-center items-center flex-col gap-5">
                <div>
                    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg ">
                        <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            <Image
                                className="animate-pulse"
                                src="https://res.cloudinary.com/dxwmdooxc/image/upload/v1735106262/kreditzy/amemaksfp86qod2zw5jv.png"
                                alt="kreditzy-logo"
                                width={1000}
                                height={1000}
                                priority
                            />
                        </div>
                        <BorderBeam size={500} duration={5} delay={2} />
                    </div>
                    <MorphingText
                        className="ml-80"
                        texts={['Aziz', 'Petrus', 'Jigan', 'Aldy', 'Anwar']}
                    />
                </div>
            </div>
            <Meteors number={100} />
            <Particles
                className="absolute inset-0 z-0"
                quantity={1000}
                ease={80}
                color={'#000'}
                refresh
            />
        </LobbyContainer>
    );
};
