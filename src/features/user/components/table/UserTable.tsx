'use client';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '~/components/ui/table';
import { useUsers } from '../../api';

export const UserTable = () => {
    const { data: users } = useUsers();
    console.log(users);
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Provider</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users?.map(user => (
                    <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.provider}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
