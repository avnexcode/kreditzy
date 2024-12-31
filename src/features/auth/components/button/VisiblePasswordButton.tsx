import { Eye, EyeOff } from 'lucide-react';

type VisiblePasswordButtonProps = {
    visiblePassword: boolean;
    setVisiblePassword: (prev: boolean) => void;
    className?: string;
};

export const VisiblePasswordButton = (props: VisiblePasswordButtonProps) => {
    const { visiblePassword, setVisiblePassword, className } = props;

    return (
        <button
            type="button"
            className={`absolute right-5 top-9 text-gray-400 hover:text-gray-600 ${className}`}
            onClick={() => setVisiblePassword(!visiblePassword)}
        >
            {visiblePassword ? <Eye size={16} /> : <EyeOff size={16} />}
        </button>
    );
};
