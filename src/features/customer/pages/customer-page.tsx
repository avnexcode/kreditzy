import { PageContainer } from '~/components/layouts/PageContainer';
import { CustomerTable } from '../components/table/CustomerTable';
import { Input } from '~/components/ui/input';
import { CreateCustomerDialog } from '../components/dialog/CreateCustomerDialog';

export const CustomerPage = () => {
    return (
        <PageContainer title="Dashboard - Customer" description="">
            <nav className="flex gap-5 mb-5">
                <Input placeholder="search" />
                <CreateCustomerDialog />
            </nav>
            <CustomerTable />
        </PageContainer>
    );
};
