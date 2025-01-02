import { CustomerTable } from '../components/table/CustomerTable';
import { Input } from '~/components/ui/input';
import { CreateCustomerDialog } from '../components/dialog/CreateCustomerDialog';
import { DashboardContainer } from '~/components/layouts/DashboardContainer';

export const DashboardCustomerPage = () => {
    return (
        <DashboardContainer
            title="Nasabah"
            description="Kelola data nasabah anda"
        >
            <nav className="flex gap-5 mb-5">
                <Input placeholder="search" />
                <CreateCustomerDialog />
            </nav>
            <CustomerTable />
        </DashboardContainer>
    );
};
