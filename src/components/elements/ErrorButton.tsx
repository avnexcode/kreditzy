type ErrorButtonProps = {
    label: string;
    onClick: () => void;
};

export const ErrorButton = ({ onClick, ...props }: ErrorButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="mt-5 group relative inline-block text-sm font-medium text-red-500 focus:outline-none active:text-red-500"
        >
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-red-500 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
            <span className="relative block border border-current bg-white px-8 py-3">
                {props.label}
            </span>
        </button>
    );
};
