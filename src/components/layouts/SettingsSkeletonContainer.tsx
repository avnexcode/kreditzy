import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { PageContainer } from './PageContainer';
import { Skeleton } from '../ui/skeleton';

type SettingsSkeletonContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const SettingsSkeletonContainer: React.FC<
    SettingsSkeletonContainerProps
> = ({ children, className }) => {
    return (
        <Card className={`border-none shadow-none ${className}`}>
            <CardHeader className="gap-y-3">
                <CardTitle className="text-zinc-900">
                    <Skeleton className="w-1/3 h-[20px]" />
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
