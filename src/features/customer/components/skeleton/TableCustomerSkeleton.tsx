import { Skeleton } from '~/components/ui/skeleton';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '~/components/ui/table';

export const CustomerTableSkeleton = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-16">
                        <Skeleton className="h-4 w-8" />
                    </TableHead>
                    <TableHead>
                        <Skeleton className="h-4 w-24" />
                    </TableHead>
                    <TableHead>
                        <Skeleton className="h-4 w-32" />
                    </TableHead>
                    <TableHead>
                        <Skeleton className="h-4 w-28" />
                    </TableHead>
                    <TableHead>
                        <Skeleton className="h-4 w-28" />
                    </TableHead>
                    <TableHead>
                        <Skeleton className="h-4 w-28" />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {[...new Array<undefined>(5)].map((_, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <Skeleton className="h-4 w-8" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-4 w-32" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-4 w-40" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-4 w-36" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-4 w-36" />
                        </TableCell>
                        <TableCell>
                            <Skeleton className="h-4 w-36" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
