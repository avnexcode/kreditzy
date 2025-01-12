import { LobbyContainer } from '~/components/layouts/LobbyContainer';
import Meteors from '~/components/ui/meteors';
import Particles from '~/components/ui/particles';
import { UsernameList } from '../components/UsernameList';
import { HeroImage } from '../components/HeroImage';
import Globe from '~/components/ui/globe';

export const HomePage = () => {
    return (
        <LobbyContainer className="min-h-screen max-h-screen overflow-hidden">
            <div className="z-50 w-full flex justify-center items-center flex-col gap-5">
                <div>
                    <HeroImage />
                    <UsernameList />
                </div>
            </div>
            <Particles
                className="absolute inset-0 z-0"
                quantity={1000}
                ease={80}
                color={'#000'}
                refresh
            />
            <Meteors number={100} />
            <Globe className="top-28 -z-50" />
        </LobbyContainer>
    );
};
