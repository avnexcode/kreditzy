import { DashboardSkeletonContainer } from '~/components/skeleton/layouts/DashboardSkeletonContainer';
import { GuarantorCardSkeleton } from '../card/GuarantorCardSkeleton';

export const DetailGuarantorPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <GuarantorCardSkeleton />
        </DashboardSkeletonContainer>
    );
};
