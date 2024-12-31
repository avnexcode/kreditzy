import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

export const LoanReferenceTableHeader = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Nasabah</TableHead>
                <TableHead>Surplus</TableHead>
                <TableHead>Jumlah Pinjaman</TableHead>
                <TableHead>Jangka Waktu</TableHead>
                <TableHead>Angsuran</TableHead>
            </TableRow>
        </TableHeader>
    );
};
