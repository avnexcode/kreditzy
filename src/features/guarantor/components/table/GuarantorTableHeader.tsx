import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

export const GuarantorTableHeader = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Nama Penjamin</TableHead>
                <TableHead>Nasabah Yang di Jamin</TableHead>
                <TableHead>Hubungan Keluarga</TableHead>
            </TableRow>
        </TableHeader>
    );
};
