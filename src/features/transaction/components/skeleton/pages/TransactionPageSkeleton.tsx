import { DashboardSkeletonContainer } from '~/components/skeleton/layouts/DashboardSkeletonContainer';
import { Skeleton } from '~/components/ui/skeleton';
import { TransactionTableSkeleton } from '../table/TransactionTableSkeleton';

export const TransactionPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <nav className="flex gap-5 mb-5">
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-24" />
            </nav>
            <TransactionTableSkeleton />
        </DashboardSkeletonContainer>
    );
};
