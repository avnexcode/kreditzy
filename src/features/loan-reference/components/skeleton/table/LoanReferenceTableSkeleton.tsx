import { Skeleton } from '~/components/ui/skeleton';
import { Table, TableCaption } from '~/components/ui/table';
import { LoanReferenceTableBodySkeleton } from './LoanReferenceTableBodySkeleton';
import { LoanReferenceTableHeaderSkeleton } from './LoanReferenceTableHeaderSkeleton';

export const LoanReferenceTableSkeleton = () => {
    return (
        <Table>
            <TableCaption>
                <Skeleton className="h-4 w-72" />
            </TableCaption>
            <LoanReferenceTableHeaderSkeleton />
            <LoanReferenceTableBodySkeleton />
        </Table>
    );
};
