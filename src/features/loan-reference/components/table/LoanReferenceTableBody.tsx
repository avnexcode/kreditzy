'use client';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import { LoanReferenceTableMenu } from './LoanReferenceTableMenu';
import { toIDR } from '~/utils/convert-currency';
import { useLoanReferences } from '../../api/client';
import { LoanReferenceTableBodySkeleton } from '../skeleton/table/LoanReferenceTableBodySkeleton';

export const LoanReferenceTableBody = () => {
    const { data: loanReferences, isLoading: isLoanReferencesLoading } =
        useLoanReferences();
    if (isLoanReferencesLoading) {
        return <LoanReferenceTableBodySkeleton />;
    }
    return (
        <TableBody>
            {loanReferences?.length === 0 && (
                <TableRow>
                    <TableCell
                        colSpan={7}
                        className="text-center text-lg h-24 text-muted-foreground text-zinc-900"
                    >
                        Tidak ada data referensi nasabah.
                    </TableCell>
                </TableRow>
            )}
            {loanReferences?.map((loanReference, index) => (
                <TableRow key={index} className="capitalize">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{loanReference.customer.name}</TableCell>
                    <TableCell>
                        {toIDR(loanReference.monthly_surplus)}
                    </TableCell>
                    <TableCell>
                        {toIDR(loanReference.requested_loan_amount)}
                    </TableCell>
                    <TableCell>{loanReference.loan_term} Bulan</TableCell>
                    <TableCell>{toIDR(loanReference.installment)}</TableCell>
                    <TableCell>
                        <LoanReferenceTableMenu id={loanReference.id} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
