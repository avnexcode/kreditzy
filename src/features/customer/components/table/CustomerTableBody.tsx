'use client';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import { CustomerTableMenu } from './CustomerTableMenu';
import { useCustomers } from '../../api/client';
import { CustomerTableBodySkeleton } from '../skeleton/table/CustomerTableBodySkeleton';

export const CustomerTableBody = () => {
    const { data: customers, isLoading: isCustomersLoading } = useCustomers();
    if (isCustomersLoading) {
        return <CustomerTableBodySkeleton />;
    }
    return (
        <TableBody>
            {customers?.length === 0 && (
                <TableRow>
                    <TableCell
                        colSpan={7}
                        className="text-center text-lg h-24 text-muted-foreground text-zinc-900"
                    >
                        Tidak ada data nasabah.
                    </TableCell>
                </TableRow>
            )}
            {customers?.map((customer, index) => (
                <TableRow key={index} className="capitalize">
                    <TableCell className="w-5">{index + 1}</TableCell>
                    <TableCell className="w-40">{customer.name}</TableCell>
                    <TableCell className="w-36">
                        {customer.national_id}
                    </TableCell>
                    <TableCell className="w-36">{customer.phone}</TableCell>
                    <TableCell className="w-36">
                        {customer.occupation}
                    </TableCell>
                    <TableCell className="w-8">
                        <CustomerTableMenu id={customer.id} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};
