import { Skeleton } from '~/components/ui/skeleton';

export const EditPasswordFormInnerSkeleton = () => {
    return (
        <div className="flex flex-col gap-5">
            {[...new Array<undefined>(2)].map((_, index) => (
                <div className="space-y-4" key={index}>
                    <Skeleton className="h-5 w-44" />
                    <Skeleton className="h-9 w-full" />
                </div>
            ))}

            <div className="flex gap-14 w-full justify-center py-5">
                <Skeleton className="h-5 w-36" />
                <Skeleton className="h-5 w-36" />
                <Skeleton className="h-5 w-36" />
                <Skeleton className="h-5 w-36" />
            </div>

            <div className="space-y-4">
                <Skeleton className="h-5 w-44" />
                <Skeleton className="h-9 w-full" />
            </div>
        </div>
    );
};
