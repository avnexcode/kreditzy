import { DashboardSkeletonContainer } from '~/components/layouts/DashboardSkeletonContainer';
import { GuarantorTableSkeleton } from '../table/GuarantorTableSkeleton';
import { Skeleton } from '~/components/ui/skeleton';

export const GuarantorPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <nav className="flex gap-5 mb-5">
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-24" />
            </nav>
            <GuarantorTableSkeleton />
        </DashboardSkeletonContainer>
    );
};
