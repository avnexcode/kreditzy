import { Skeleton } from '~/components/ui/skeleton';
import { Table, TableCaption } from '~/components/ui/table';
import { CreditWorthinessTableBodySkeleton } from './CreditWorthinessTableBodySkeleton';
import { CreditWorthinessTableHeaderSkeleton } from './CreditWorthinessTableHeaderSkeleton';

export const CreditWorthinessTableSkeleton = () => {
    return (
        <Table>
            <TableCaption>
                <Skeleton className="h-4 w-52" />
            </TableCaption>
            <CreditWorthinessTableBodySkeleton />
            <CreditWorthinessTableHeaderSkeleton />
        </Table>
    );
};
