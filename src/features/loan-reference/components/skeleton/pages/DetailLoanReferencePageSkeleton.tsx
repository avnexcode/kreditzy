import { DashboardSkeletonContainer } from '~/components/skeleton/layouts/DashboardSkeletonContainer';
import { LoanReferenceViewSkeleton } from '../views/LoanReferenceViewSkeleton';

export const DetailLoanReferencePageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <LoanReferenceViewSkeleton customerName={true} />
        </DashboardSkeletonContainer>
    );
};
