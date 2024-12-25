import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';

type DashboardPageContainerProps = {
    children: React.ReactNode;
    className?: string;
    title: string;
    description: string;
};

export const DashboardPageContainer: React.FC<DashboardPageContainerProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <Card className={`border-none shadow-none ${className}`}>
            <CardHeader>
                <CardTitle className="text-zinc-900">{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-10">{children}</CardContent>
        </Card>
    );
};
