import { TableHead, TableHeader, TableRow } from '~/components/ui/table';
export const CustomerTableHeader = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>NIK</TableHead>
                <TableHead>Nomor HP</TableHead>
                <TableHead>Dibuat</TableHead>
                <TableHead>Diperbarui</TableHead>
            </TableRow>
        </TableHeader>
    );
};