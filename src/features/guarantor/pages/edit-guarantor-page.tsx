import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { EditGuarantorForm } from '../components/form/EditGuarantorForm';

export const DashboardEditGuarantorPage = () => {
    return (
        <DashboardContainer
            title="Dashboard - Edit Penjamin Nasabah"
            description=""
        >
            <EditGuarantorForm />
        </DashboardContainer>
    );
};
