import { DashboardSkeletonContainer } from '~/components/skeleton/layouts/DashboardSkeletonContainer';
import { DetailViewSkeleton } from '../views/DetailViewSkeleton';

export const DetailCustomerPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <DetailViewSkeleton />
        </DashboardSkeletonContainer>
    );
};
