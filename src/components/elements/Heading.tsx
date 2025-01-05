interface HeadingProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const variantStyles = {
    h1: 'text-5xl',
    h2: 'text-4xl',
    h3: 'text-3xl',
    h4: 'text-2xl',
    h5: 'text-xl',
    h6: 'text-lg',
};

export const Heading = ({
    children,
    className = '',
    variant = 'h1',
}: HeadingProps) => {
    return (
        <h1 className={`title ${variantStyles[variant]} ${className}`.trim()}>
            {children}
        </h1>
    );
};

export const H1 = (props: Omit<HeadingProps, 'variant'>) => (
    <Heading {...props} variant="h1" />
);

export const H2 = (props: Omit<HeadingProps, 'variant'>) => (
    <Heading {...props} variant="h2" />
);

export const H3 = (props: Omit<HeadingProps, 'variant'>) => (
    <Heading {...props} variant="h3" />
);

export const H4 = (props: Omit<HeadingProps, 'variant'>) => (
    <Heading {...props} variant="h4" />
);

export const H5 = (props: Omit<HeadingProps, 'variant'>) => (
    <Heading {...props} variant="h5" />
);

export const H6 = (props: Omit<HeadingProps, 'variant'>) => (
    <Heading {...props} variant="h6" />
);
