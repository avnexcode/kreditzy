import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { PageContainer } from './PageContainer';

type DashboardContainerProps = {
    children: React.ReactNode;
    className?: string;
    title: string;
    description: string;
};

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <Card className={`border-none shadow-none ${className}`}>
            <CardHeader className="capitalize">
                <CardTitle className="text-zinc-900">{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <PageContainer>{children}</PageContainer>
            </CardContent>
        </Card>
    );
};
