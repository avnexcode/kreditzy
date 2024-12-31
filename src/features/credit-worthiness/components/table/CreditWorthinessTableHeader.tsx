import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

export const CreditWorthinessTableHeader = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Nama Nasabah</TableHead>
                <TableHead>Status Kelayakan</TableHead>
            </TableRow>
        </TableHeader>
    );
};
