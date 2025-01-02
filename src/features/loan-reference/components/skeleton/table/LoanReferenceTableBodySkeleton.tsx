import { Skeleton } from '~/components/ui/skeleton';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';

export const LoanReferenceTableBodySkeleton = () => {
    return (
        <TableBody>
            {[...new Array<undefined>(5)].map((_, index) => (
                <TableRow key={index}>
                    <TableCell>
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
