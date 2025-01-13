import MorphingText from '~/components/ui/morphing-text';

type UsernameListProps = {
    className?: string;
};

export const UsernameList = ({ className }: UsernameListProps) => {
    const username = ['Aziz', 'Pentrus', 'Jingan', 'Bendots', 'Ki Anwar'];
    return (
        <MorphingText
            className={`ml-80 text-xl ${className}`}
            texts={username}
        />
    );
};
