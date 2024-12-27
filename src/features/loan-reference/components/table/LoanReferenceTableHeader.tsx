import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

export const LoanReferenceTableHeader = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Status Pekerjaan</TableHead>
                <TableHead>Riwayat Kredit Sebelumnya</TableHead>
                <TableHead>Jumlah Pinjaman yang Diajukan</TableHead>
                <TableHead>Jangka Waktu</TableHead>
                <TableHead>Surplus</TableHead>
                <TableHead>Angsuran</TableHead>
            </TableRow>
        </TableHeader>
    );
};
