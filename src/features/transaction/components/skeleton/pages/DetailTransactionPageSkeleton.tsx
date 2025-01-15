import { DashboardSkeletonContainer } from '~/components/skeleton/layouts/DashboardSkeletonContainer';
import { DetailTransactionViewSkeleton } from '../views/DetailTransactionViewSkeleton';

export const DetailTransactionPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <DetailTransactionViewSkeleton />
        </DashboardSkeletonContainer>
    );
};
