import WordRotate from '~/components/ui/word-rotate';

type FullnameListProps = {
    className?: string;
};

export const FullnameList = ({ className }: FullnameListProps) => {
    const names = [
        'Muhammad Fauzi Nur Aziz',
        'Rafi Andrea Lesmana',
        'Jihan Khansa Nadhila',
        'Aldy Ibnu Faizal',
        'Alfian Anwar Shodiqi',
    ];
    return <WordRotate className={`${className}`} words={names} />;
};
