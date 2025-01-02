import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { Skeleton } from '~/components/ui/skeleton';
import { GuarantorCardSkeleton } from '../card/GuarantorCardSkeleton';

export const GuarantorViewSkeleton = () => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-56" />
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {[...Array<undefined>(1)].map((_, i) => (
                        <GuarantorCardSkeleton key={i} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
