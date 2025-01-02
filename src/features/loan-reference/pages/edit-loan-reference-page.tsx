import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { EditLoanReferenceForm } from '../components/form/EditLoanReferenceForm';

export const DashboardEditLoanReferencePage = () => {
    return (
        <DashboardContainer
            title="Edit Data Referensi"
            description="Perbarui data referensi nasabah berdasarkan data yang sesuai"
        >
            <EditLoanReferenceForm />
        </DashboardContainer>
    );
};
