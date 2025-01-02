import { Skeleton } from '~/components/ui/skeleton';
import { TableHead, TableHeader, TableRow } from '~/components/ui/table';
export const GuarantorTableHeaderSkeleton = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>
                    <Skeleton className="h-4 w-full" />
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
                    <Skeleton className="h-4 w-full" />
                </TableHead>
            </TableRow>
        </TableHeader>
    );
};
