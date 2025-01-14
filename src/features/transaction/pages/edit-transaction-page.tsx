import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { EditTransactionForm } from '../components/form/EditTransactionForm';

export const DashboardEditTransactionPage = () => {
    return (
        <DashboardContainer
            title="Edit Transaksi"
            description="Perbarui transaksi nasabah"
        >
            <EditTransactionForm />
        </DashboardContainer>
    );
};
