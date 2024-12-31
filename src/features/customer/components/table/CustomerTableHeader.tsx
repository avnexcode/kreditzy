import { TableHead, TableHeader, TableRow } from '~/components/ui/table';
export const CustomerTableHeader = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className="w-5">No</TableHead>
                <TableHead className="w-40">Nama</TableHead>
                <TableHead className="w-36">NIK</TableHead>
                <TableHead className="w-36">Nomor HP</TableHead>
                <TableHead className="w-36">Pekerjaan</TableHead>
                <TableHead className="w-8"></TableHead>
            </TableRow>
        </TableHeader>
    );
};
