import { DashboardSkeletonContainer } from '~/components/skeleton/layouts/DashboardSkeletonContainer';
import { TransactionViewSkeleton } from '../views/TransactionViewSkeleton';

export const DetailTransactionPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <TransactionViewSkeleton customerName={true} />
        </DashboardSkeletonContainer>
    );
};
