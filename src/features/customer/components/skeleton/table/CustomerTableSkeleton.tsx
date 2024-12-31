import { Table, TableCaption } from '~/components/ui/table';
import { CustomerTableBodySkeleton } from './CustomerTableBodySkeleton';
import { CustomerTableHeaderSkeleton } from './CustomerTableHeaderSkeleton';
import { Skeleton } from '~/components/ui/skeleton';

export const CustomerTableSkeleton = () => {
    return (
        <Table>
            <TableCaption>
                <Skeleton className="h-4 w-52" />
            </TableCaption>
            <CustomerTableHeaderSkeleton />
            <CustomerTableBodySkeleton />
        </Table>
    );
};
