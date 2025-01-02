import { DashboardSkeletonContainer } from '~/components/layouts/DashboardSkeletonContainer';
import { EditCustomerFormSkeleton } from '../form/EditCustomerFormSkeleton';

export const EditCustomerPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <EditCustomerFormSkeleton />
        </DashboardSkeletonContainer>
    );
};
