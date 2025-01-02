import { Skeleton } from '~/components/ui/skeleton';

export const DetailCardItemSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] items-center text-sm">
        <Skeleton className="h-4 w-32" />
        <div className="flex">
            <Skeleton className="h-4 w-48 ml-1" />
        </div>
    </div>
);
