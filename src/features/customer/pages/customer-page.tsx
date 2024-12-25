import { DashboardPageContainer } from '~/components/layouts/DashboardPageContainer';
import { TableCustomer } from '../components/table/TableCustomer';
import { Input } from '~/components/ui/input';
import { CreateCustomerDialog } from '../components/dialog/CreateCustomerDialog';

export const DashboardCustomerPage = () => {
    return (
        <DashboardPageContainer title="Dashboard - Nasabah" description="">
            <nav className="flex gap-5 mb-5">
                <Input placeholder="search" />
                <CreateCustomerDialog />
            </nav>
            <TableCustomer />
        </DashboardPageContainer>
    );
};
