import { Skeleton } from '~/components/ui/skeleton';

export const EditCustomerFormInnerSkeleton = () => {
    return (
        <div className="flex flex-col gap-5">
            {[...new Array<undefined>(6)].map((_, index) => (
                <div className="space-y-4" key={index}>
                    <Skeleton className="h-5 w-44" />
                    <Skeleton className="h-9 w-full" />
                </div>
            ))}
        </div>
    );
};
