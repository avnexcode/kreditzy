import { DashboardSkeletonContainer } from '~/components/layouts/DashboardSkeletonContainer';
import { Skeleton } from '~/components/ui/skeleton';
import { CustomerTableSkeleton } from '../table/CustomerTableSkeleton';

export const CustomerPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <nav className="flex gap-5 mb-5">
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-24" />
            </nav>
            <CustomerTableSkeleton />
        </DashboardSkeletonContainer>
    );
};
