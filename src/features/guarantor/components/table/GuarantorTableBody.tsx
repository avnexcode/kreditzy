'use client';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import { GuarantorTableMenu } from './GuarantorTableMenu';
import { useGuarantors } from '../../api';
import { toFormatDate } from '~/utils/toFormatDate';

export const GuarantorTableBody = () => {
    const { data: guarantors } = useGuarantors();
    return (
        <TableBody>
            {guarantors?.length === 0 && (
                <TableRow>
                    <TableCell
                        colSpan={7}
                        className="text-center text-lg h-24 text-muted-foreground text-zinc-900"
                    >
                        Tidak ada data penjamin nasabah.
                    </TableCell>
                </TableRow>
            )}
            {guarantors?.map((guarantor, index) => (
                <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="capitalize">
                        {guarantor.name}
                    </TableCell>
                    <TableCell>{guarantor.national_id}</TableCell>
                    <TableCell>{guarantor.phone}</TableCell>
                    <TableCell>{toFormatDate(guarantor.created_at)}</TableCell>
                    <TableCell>{toFormatDate(guarantor.updated_at)}</TableCell>
                    <TableCell>
                        <GuarantorTableMenu id={guarantor.id} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
