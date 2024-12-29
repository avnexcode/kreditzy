import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

export const GuarantorTableHeader = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Nasabah</TableHead>
            </TableRow>
        </TableHeader>
    );
};
