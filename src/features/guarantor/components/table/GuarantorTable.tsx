import { Table, TableCaption } from '~/components/ui/table';
import { GuarantorTableHeader } from './GuarantorTableHeader';
import { GuarantorTableBody } from './GuarantorTableBody';

export const GuarantorTable = () => {
    return (
        <Table>
            <GuarantorTableHeader />
            <GuarantorTableBody />
            <TableCaption>Daftar penjamin terbaru Anda.</TableCaption>
        </Table>
    );
};
