import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { PageContainer } from './PageContainer';
import { Skeleton } from '../ui/skeleton';

type DashboardSkeletonContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const DashboardSkeletonContainer: React.FC<
    DashboardSkeletonContainerProps
> = ({ children, className }) => {
    return (
        <Card className={`border-none shadow-none ${className}`}>
            <CardHeader>
                <CardTitle className="text-zinc-900">
                    <Skeleton className="w-[100px] h-[20px]" />
                </CardTitle>
                <CardDescription>
                    <Skeleton className="w-[200px] h-[15px]" />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <PageContainer>{children}</PageContainer>
            </CardContent>
        </Card>
    );
};
