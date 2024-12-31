import { Skeleton } from '~/components/ui/skeleton';
import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

export const LoanReferenceTableHeaderSkeleton = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>
                    <Skeleton className="h-4 w-8" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-24" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-32" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-28" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-28" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-28" />
                </TableHead>
            </TableRow>
        </TableHeader>
    );
};
