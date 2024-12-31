import { Table, TableCaption } from '~/components/ui/table';
import { GuarantorTableBodySkeleton } from './GuarantorTableBodySkeleton';
import { GuarantorTableHeaderSkeleton } from './GuarantorTableHeaderSkeleton';
import { Skeleton } from '~/components/ui/skeleton';

export const GuarantorTableSkeleton = () => {
    return (
        <Table>
            <TableCaption>
                <Skeleton className="h-4 w-72" />
            </TableCaption>
            <GuarantorTableBodySkeleton />
            <GuarantorTableHeaderSkeleton />
        </Table>
    );
};
