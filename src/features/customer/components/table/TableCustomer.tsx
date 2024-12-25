import { Table, TableCaption } from '~/components/ui/table';
import { TableCustomerHeader } from './TableCustomerHead';
import { TableCustomerBody } from './TableCustomerBody';

export const TableCustomer = () => {
    return (
        <Table>
            <TableCaption>Daftar seluruh nasabah.</TableCaption>
            <TableCustomerHeader />
            <TableCustomerBody />
        </Table>
    );
};
