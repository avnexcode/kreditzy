import { Table, TableCaption } from '~/components/ui/table';
import { LoanReferenceTableBody } from './LoanReferenceTableBody';
import { LoanReferenceTableHeader } from './LoanReferenceTableHeader';

export const LoanReferenceTable = () => {
    return (
        <Table>
            <TableCaption>Daftar referensi pinjaman terbaru anda.</TableCaption>
            <LoanReferenceTableHeader />
            <LoanReferenceTableBody />
        </Table>
    );
};
