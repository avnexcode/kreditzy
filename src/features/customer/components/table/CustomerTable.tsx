import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '~/components/ui/table';

export const CustomerTable = () => {
    return (
        <Table>
            <TableCaption>A list of your recent customers.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Nama</TableHead>
                    <TableHead>NIK</TableHead>
                    <TableHead>Dibuat</TableHead>
                    <TableHead>Diperbarui</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Muhammad Fauzi Nur Aziz</TableCell>
                    <TableCell>221000000000</TableCell>
                    <TableCell>{new Date().getTime()}</TableCell>
                    <TableCell>{new Date().getTime()}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};
