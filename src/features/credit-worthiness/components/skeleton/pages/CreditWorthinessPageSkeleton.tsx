import { Skeleton } from '~/components/ui/skeleton';
import { CreditWorthinessTableSkeleton } from '../table/CreditWorthinessTableSkeleton';
import { DashboardSkeletonContainer } from '~/components/skeleton/layouts/DashboardSkeletonContainer';

export const CreditWorthinessPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <nav className="flex gap-5 mb-5">
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-24" />
            </nav>
            <CreditWorthinessTableSkeleton />
        </DashboardSkeletonContainer>
    );
};
