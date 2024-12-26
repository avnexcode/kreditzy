import { Table, TableCaption } from '~/components/ui/table';
import { CustomerTableHeader } from './CustomerTableHeader';
import { CustomerTableBody } from './CustomerTableBody';

export const CustomerTable = () => {
    return (
        <Table>
            <TableCaption>Daftar seluruh nasabah.</TableCaption>
            <CustomerTableHeader />
            <CustomerTableBody />
        </Table>
    );
};
