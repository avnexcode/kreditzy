'use client';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import { GuarantorTableMenu } from './GuarantorTableMenu';
import { useGuarantors } from '../../api/client';
import { GuarantorTableBodySkeleton } from '../skeleton/table/GuarantorTableBodySkeleton';
import { renderElements } from '~/utils/render-elements';

export const GuarantorTableBody = () => {
    const { data: guarantors, isLoading: isGuarantorsLoading } =
        useGuarantors();

    if (isGuarantorsLoading) {
        return <GuarantorTableBodySkeleton />;
    }

    return (
        <TableBody>
            {(!guarantors || guarantors.length === 0) && (
                <TableRow>
                    <TableCell
                        colSpan={7}
                        className="text-center text-lg h-24 text-muted-foreground text-zinc-900"
                    >
                        Tidak ada data penjamin nasabah.
                    </TableCell>
                </TableRow>
            )}
            {renderElements({
                of: guarantors,
                render: (guarantor, index) => (
                    <TableRow key={guarantor.id} className="capitalize">
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{guarantor.name}</TableCell>
                        <TableCell>{guarantor.customer.name}</TableCell>
                        <TableCell>{guarantor.relationship}</TableCell>
                        <TableCell>
                            <GuarantorTableMenu id={guarantor.id} />
                        </TableCell>
                    </TableRow>
                ),
            })}
        </TableBody>
    );
};
