import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { EditGuarantorForm } from '../components/form/EditGuarantorForm';

export const DashboardEditGuarantorPage = () => {
    return (
        <DashboardContainer
            title="Edit Penjamin Nasabah"
            description="Perbarui data penjmain nasabah berdasarkan data yang sesuai"
        >
            <EditGuarantorForm />
        </DashboardContainer>
    );
};
