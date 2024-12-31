'use client';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import { useCreditWorthinesses } from '../../api/client';

export const CreditWorthinessTableBody = () => {
    const { data: creditWorthinesses } = useCreditWorthinesses();
    return (
        <TableBody>
            {creditWorthinesses?.length === 0 && (
                <TableRow>
                    <TableCell
                        colSpan={7}
                        className="text-center text-lg h-24 text-muted-foreground text-zinc-900"
                    >
                        Tidak ada data status kelayakan.
                    </TableCell>
                </TableRow>
            )}
            {creditWorthinesses?.map((creditWorthiness, index) => (
                <TableRow key={index} className="capitalize">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{creditWorthiness.customer.name}</TableCell>
                    <TableCell>
                        <span
                            className={`${creditWorthiness.status ? 'text-green-600' : 'text-red-600'}`}
                        >
                            {creditWorthiness.status ? 'Layak' : 'Tidak Layak'}
                        </span>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
