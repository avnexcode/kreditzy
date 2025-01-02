import { Skeleton } from '~/components/ui/skeleton';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';

export const CustomerTableBodySkeleton = () => {
    return (
        <TableBody>
            {[...new Array<undefined>(5)].map((_, index) => (
                <TableRow key={index}>
                    <TableCell>
                        <Skeleton className="h-4 w-full" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 w-full" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 w-full" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 w-full" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 w-full" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="h-4 w-full" />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
