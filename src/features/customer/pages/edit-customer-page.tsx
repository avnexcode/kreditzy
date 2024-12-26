import { EditCustomerForm } from '../components/form/EditCustomerForm';
import { DashboardContainer } from '~/components/layouts/DashboardContainer';

export const DashboardEditCustomerPage = () => {
    return (
        <DashboardContainer title="Dashboard - Edit Customer" description="">
            <EditCustomerForm />
        </DashboardContainer>
    );
};
