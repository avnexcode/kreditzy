type PageContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const PageContainer: React.FC<PageContainerProps> = ({
    children,
    className,
}) => {
    return <main className={`mt-10 ${className}`}>{children}</main>;
};
