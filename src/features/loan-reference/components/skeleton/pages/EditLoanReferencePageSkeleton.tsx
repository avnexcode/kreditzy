import { DashboardSkeletonContainer } from '~/components/layouts/DashboardSkeletonContainer';
import { EditLoanReferenceFormSkeleton } from '../form/EditLoanReferenceFormSkeleton';

export const EditLoanReferencePageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <EditLoanReferenceFormSkeleton />
        </DashboardSkeletonContainer>
    );
};
