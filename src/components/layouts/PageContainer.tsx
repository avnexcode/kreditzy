import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';

type PageContainerProps = {
    children: React.ReactNode;
    className?: string;
    title: string;
    description: string;
};

export const PageContainer: React.FC<PageContainerProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <Card className={`border-none shadow-none ${className}`}>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-10">{children}</CardContent>
        </Card>
    );
};
