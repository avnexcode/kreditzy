import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

export const LoanReferenceTableHeader = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Income</TableHead>
                <TableHead>Expense</TableHead>
                <TableHead>Pekerjaan</TableHead>
                <TableHead>Riwayat Kredit</TableHead>
                <TableHead>Jumlah Pinjaman</TableHead>
                <TableHead>Jaminan</TableHead>
                <TableHead>Jangka</TableHead>
                <TableHead>Surplus</TableHead>
                <TableHead>Angsuran</TableHead>
            </TableRow>
        </TableHeader>
    );
};
