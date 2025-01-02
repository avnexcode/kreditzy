import { DashboardSkeletonContainer } from '~/components/layouts/DashboardSkeletonContainer';
import { EditGuarantorFormSkeleton } from '../form/EditGuarantorFormSkeleton';

export const EditGuarantorPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <EditGuarantorFormSkeleton />
        </DashboardSkeletonContainer>
    );
};
