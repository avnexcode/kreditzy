import { Skeleton } from '~/components/ui/skeleton';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';

export const LoanReferenceTableBodySkeleton = () => {
    return (
        <TableBody>
            {[...new Array<undefined>(5)].map((_, index) => (
                <TableRow key={index}>
                    <TableCell className="w-5">
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell className="w-40">
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell className="w-40">
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell className="w-40">
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell className="w-40">
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell className="w-40">
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                    <TableCell className="w-6">
                        <Skeleton className="h-4 2-full" />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
