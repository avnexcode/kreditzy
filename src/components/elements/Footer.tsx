import TypingAnimation from '~/components/ui/typing-animation';
import WordRotate from '~/components/ui/word-rotate';

export const Footer = () => {
    return (
        <footer className="flex w-full px-5 py-3 justify-center items-center gap-3">
            <TypingAnimation className="text-sm">
                Create with 💖 by
            </TypingAnimation>
            <WordRotate
                className="font-bold text-black dark:text-white w-[300px]"
                words={[
                    'Muhammad Fauzi Nur Aziz',
                    'Rafi Andrea Lesmana',
                    'Jihan Khansa Nadhila',
                    'Aldy Ibnu Faizal',
                    'Alfian Anwar Shodiqi',
                ]}
            />
        </footer>
    );
};
