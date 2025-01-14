import React from 'react';
import { Skeleton } from '~/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { DetailCardItemSkeleton } from '~/components/skeleton/elements/DetailCardItemSkeleton';

type TransactionViewSkeletonProps = {
    customerName: boolean;
};

export const TransactionViewSkeleton = (
    props: TransactionViewSkeletonProps,
) => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-56" />
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div className="rounded-lg">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                            <div className="space-y-2">
                                {[...Array<undefined>(4)].map((_, i) => (
                                    <DetailCardItemSkeleton key={`left-${i}`} />
                                ))}
                            </div>
                            <div className="space-y-2">
                                {[...Array<undefined>(5)].map((_, i) => (
                                    <DetailCardItemSkeleton
                                        key={`right-${i}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="pt-10">
                            <div className="w-full flex flex-col gap-y-5 md:flex-row justify-end gap-x-10">
                                {props.customerName && (
                                    <Skeleton className="h-4 w-64" />
                                )}
                                <div className="w-full flex flex-col md:flex-row gap-y-5 gap-x-10 justify-end">
                                    {[...Array<undefined>(2)].map((_, i) => (
                                        <Skeleton
                                            key={i}
                                            className="h-4 w-32"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
