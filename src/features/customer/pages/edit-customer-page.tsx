import { DashboardPageContainer } from '~/components/layouts/DashboardPageContainer';
import { EditCustomerForm } from '../components/form/EditCustomerForm';

export const DashboardEditCustomerPage = () => {
    return (
        <DashboardPageContainer
            title="Dashboard - Edit Customer"
            description=""
        >
            <EditCustomerForm />
        </DashboardPageContainer>
    );
};
