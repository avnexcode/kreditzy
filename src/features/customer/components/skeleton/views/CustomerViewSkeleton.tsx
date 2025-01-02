import React from 'react';
import { Skeleton } from '~/components/ui/skeleton';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '~/components/ui/card';
import { DetailCardItemSkeleton } from '~/components/skeleton/elements/DetailCardItemSkeleton';

export const CustomerViewSkeleton = () => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-56" />
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-10">
                    <div>
                        <Skeleton className="h-5 w-36 mb-6" />
                        <div className="space-y-2">
                            {[...Array<undefined>(4)].map((_, i) => (
                                <DetailCardItemSkeleton key={i} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <Skeleton className="h-5 w-36 mb-6" />
                        <div className="space-y-2">
                            {[...Array<undefined>(2)].map((_, i) => (
                                <DetailCardItemSkeleton key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="text-sm text-gray-500">
                <div className="w-full flex flex-col sm:flex-row justify-end gap-x-10 gap-y-5 items-start sm:items-center pt-5 sm:pt-0">
                    {[...Array<undefined>(2)].map((_, i) => (
                        <Skeleton key={i} className="h-4 w-32" />
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
};
