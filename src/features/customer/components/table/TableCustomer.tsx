import { Table, TableCaption } from '~/components/ui/table';
import { TableCustomerHeader } from './TableCustomerHead';
import { TableCustomerBody } from './TableCustomerBody';

export const TableCustomer = () => {
    return (
        <Table>
            <TableCaption>
                Daftar seluruh pelanggan yang telah terdata.
            </TableCaption>
            <TableCustomerHeader />
            <TableCustomerBody />
        </Table>
    );
};
