import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import { GuarantorTableMenu } from './GuarantorTableMenu';
import { getGuarantors } from '../../api/server';

export const GuarantorTableBody = async () => {
    const guarantors = await getGuarantors();
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
                <TableRow key={index} className="capitalize">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{guarantor.name}</TableCell>
                    <TableCell>{guarantor.customer.name}</TableCell>
                    <TableCell>
                        <GuarantorTableMenu id={guarantor.id} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
