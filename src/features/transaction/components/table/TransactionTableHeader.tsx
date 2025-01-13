import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

export const TransactionTableHeader = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Nasabah</TableHead>
                <TableHead>Angsuran</TableHead>
                <TableHead>Jangka Waktu</TableHead>
                <TableHead>Total</TableHead>
            </TableRow>
        </TableHeader>
    );
};
