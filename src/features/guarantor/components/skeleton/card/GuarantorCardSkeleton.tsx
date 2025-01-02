import { DetailCardItemSkeleton } from '~/components/skeleton/elements/DetailCardItemSkeleton';
import { Skeleton } from '~/components/ui/skeleton';

export const GuarantorCardSkeleton = () => {
    return (
        <div className="border rounded-lg p-4">
            <div className="flex justify-end items-center text-md capitalize w-full pb-5">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-32 ml-2" />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="space-y-2">
                    {[...Array<undefined>(4)].map((_, index) => (
                        <DetailCardItemSkeleton key={index} />
                    ))}
                </div>
                <div className="space-y-2">
                    {[...Array<undefined>(2)].map((_, index) => (
                        <DetailCardItemSkeleton key={index} />
                    ))}
                </div>
            </div>
            <div className="pt-10 xl:pt-5">
                <div className="w-full flex flex-col gap-y-5 md:flex-row justify-end gap-x-10 text-gray-500 text-sm">
                    <Skeleton className="h-4 w-64" />
                    <div className="w-full flex flex-col md:flex-row gap-y-5 gap-x-10 justify-end">
                        {[...Array<undefined>(2)].map((_, index) => (
                            <Skeleton key={index} className="h-4 w-32" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
