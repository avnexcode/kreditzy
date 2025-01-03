import React from 'react';
import { Skeleton } from '~/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '~/components/ui/card';

export const CreditWorthinessViewSkeleton = () => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-56" />
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="text-3xl w-full flex justify-center gap-2">
                            <Skeleton className="h-8 w-24" />
                            <Skeleton className="h-8 w-32" />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
