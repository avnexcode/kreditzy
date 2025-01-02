import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { PageContainer } from '../../layouts/PageContainer';
import { Skeleton } from '../../ui/skeleton';

type DashboardSkeletonContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const DashboardSkeletonContainer: React.FC<
    DashboardSkeletonContainerProps
> = ({ children, className }) => {
    return (
        <Card className={`border-none shadow-none ${className}`}>
            <CardHeader className="gap-y-3">
                <CardTitle className="text-zinc-900">
                    <Skeleton className="w-1/3 h-[25px]" />
                </CardTitle>
                <CardDescription>
                    <Skeleton className="w-1/2 h-[15px]" />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <PageContainer>{children}</PageContainer>
            </CardContent>
        </Card>
    );
};
