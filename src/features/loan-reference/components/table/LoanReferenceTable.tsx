import { Table, TableCaption } from '~/components/ui/table';
import { LoanReferenceTableBody } from './LoanReferenceTableBody';
import { LoanReferenceTableHeader } from './LoanReferenceTableHeader';

export const LoanReferenceTable = () => {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <LoanReferenceTableHeader />
            <LoanReferenceTableBody />
        </Table>
    );
};
