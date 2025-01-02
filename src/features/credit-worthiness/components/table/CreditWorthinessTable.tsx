import { Table, TableCaption } from '~/components/ui/table';
import { CreditWorthinessTableBody } from './CreditWorthinessTableBody';
import { CreditWorthinessTableHeader } from './CreditWorthinessTableHeader';

export const CreditWorthinessTable = () => {
    return (
        <Table>
            <TableCaption>Daftar kelayakan kredit terbaru anda.</TableCaption>
            <CreditWorthinessTableBody />
            <CreditWorthinessTableHeader />
        </Table>
    );
};
