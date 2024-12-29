type DetailCardItemProps = {
    label: string;
    content: string;
    className?: string;
};

export const DetailCardItem = ({
    className,
    ...props
}: DetailCardItemProps) => {
    return (
        <div
            className={`grid grid-cols-1 md:grid-cols-[200px,1fr] items-center text-sm capitalize ${className}`}
        >
            <span>{props.label}</span>
            <span className="font-medium">: {props.content}</span>
        </div>
    );
};
