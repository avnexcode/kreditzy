import { Skeleton } from '~/components/ui/skeleton';
import { Table, TableCaption } from '~/components/ui/table';
import { TransactionTableBodySkeleton } from './TransactionTableBodySkeleton';
import { TransactionTableHeaderSkeleton } from './TransactionTableHeaderSkeleton';

export const TransactionTableSkeleton = () => {
    return (
        <Table>
            <TableCaption>
                <Skeleton className="h-4 w-72" />
            </TableCaption>
            <TransactionTableHeaderSkeleton />
            <TransactionTableBodySkeleton />
        </Table>
    );
};
