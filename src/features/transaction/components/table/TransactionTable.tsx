import { Table, TableCaption } from '~/components/ui/table';
import { TransactionTableBody } from './TransactionTableBody';
import { TransactionTableHeader } from './TransactionTableHeader';

export const TransactionTable = () => {
    return (
        <Table>
            <TableCaption>Daftar transaksi nasabah terbaru anda.</TableCaption>
            <TransactionTableBody />
            <TransactionTableHeader />
        </Table>
    );
};
