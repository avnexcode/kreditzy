import { DashboardSkeletonContainer } from '~/components/skeleton/layouts/DashboardSkeletonContainer';
import { EditGuarantorFormSkeleton } from '../form/EditGuarantorFormSkeleton';

export const EditGuarantorPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <EditGuarantorFormSkeleton />
        </DashboardSkeletonContainer>
    );
};
