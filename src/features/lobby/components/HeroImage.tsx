import Image from 'next/image';
import { BorderBeam } from '~/components/ui/border-beam';

type HeroImageProps = {
    className?: string;
};

export const HeroImage = ({ className }: HeroImageProps) => {
    return (
        <div
            className={`relative flex flex-col items-center justify-center overflow-hidden rounded-lg ${className}`}
        >
            <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                <Image
                    className="animate-pulse"
                    src="https://res.cloudinary.com/dxwmdooxc/image/upload/v1735106262/kreditzy/amemaksfp86qod2zw5jv.png"
                    alt="kreditzy-logo"
                    width={800}
                    height={800}
                    priority
                />
            </div>
            <BorderBeam size={500} duration={5} delay={2} />
        </div>
    );
};
