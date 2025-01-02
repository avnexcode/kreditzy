import { DashboardSkeletonContainer } from '~/components/skeleton/layouts/DashboardSkeletonContainer';
import BadgeSkeleton from '~/features/dashboard/components/skeleton/badge/BadgeSkeleton';

export const DashboardPageSkeleton = () => {
    return (
        <DashboardSkeletonContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-y-12 gap-x-5">
                {[...new Array<undefined>(5)].map((_, index) => (
                    <BadgeSkeleton key={index} />
                ))}
            </div>
        </DashboardSkeletonContainer>
    );
};
