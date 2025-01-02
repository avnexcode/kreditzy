import { Skeleton } from '~/components/ui/skeleton';
import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

export const CustomerTableHeaderSkeleton = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>
                    <Skeleton className="h-4 w-8" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-36" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-36" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-36" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-36" />
                </TableHead>
                <TableHead>
                    <Skeleton className="h-4 w-8" />
                </TableHead>
            </TableRow>
        </TableHeader>
    );
};
