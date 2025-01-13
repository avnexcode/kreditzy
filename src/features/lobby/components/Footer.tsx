import TypingAnimation from '~/components/ui/typing-animation';
import { FullnameList } from './FullnameList';

export const Footer = () => {
    return (
        <footer className="flex w-full px-5 py-3 justify-center items-center gap-3">
            <TypingAnimation className="text-sm">
                Create with 💖 by
            </TypingAnimation>
            <FullnameList className="font-bold" />
        </footer>
    );
};
