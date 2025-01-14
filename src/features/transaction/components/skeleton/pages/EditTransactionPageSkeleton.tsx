import { DashboardSkeletonContainer } from '~/components/skeleton/layouts/DashboardSkeletonContainer';
import { EditTransactionFormSkeleton } from '../form/EditTransactionFormSkeleton';

export const EditTransactionPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <EditTransactionFormSkeleton />
        </DashboardSkeletonContainer>
    );
};
