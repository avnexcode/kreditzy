import { Table, TableCaption } from '~/components/ui/table';
import { CreditWorthinessTableBody } from './CreditWorthinessTableBody';
import { CreditWorthinessTableHeader } from './CreditWorthinessTableHeader';

export const CreditWorthinessTable = () => {
    return (
        <Table>
            <TableCaption>
                A list of your recent credit worthiness.
            </TableCaption>
            <CreditWorthinessTableBody />
            <CreditWorthinessTableHeader />
        </Table>
    );
};
