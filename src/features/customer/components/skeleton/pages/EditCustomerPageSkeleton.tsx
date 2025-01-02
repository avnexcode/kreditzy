import { DashboardSkeletonContainer } from '~/components/skeleton/layouts/DashboardSkeletonContainer';
import { EditCustomerFormSkeleton } from '../form/EditCustomerFormSkeleton';

export const EditCustomerPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <EditCustomerFormSkeleton />
        </DashboardSkeletonContainer>
    );
};
