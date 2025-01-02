import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { EditLoanReferenceFormInnerSkeleton } from './EditLoanReferenceFormInnerSkeleton';
import { Skeleton } from '~/components/ui/skeleton';

export const EditLoanReferenceFormSkeleton = () => {
    return (
        <Card className="border-none shadow-none">
            <CardContent className="space-y-6">
                <EditLoanReferenceFormInnerSkeleton />
            </CardContent>
            <CardFooter className="place-content-end gap-5 pt-5">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-24" />
            </CardFooter>
        </Card>
    );
};
