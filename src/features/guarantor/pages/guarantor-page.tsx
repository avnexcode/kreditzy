import { DashboardPageContainer } from '~/components/layouts/DashboardPageContainer';
import { GuarantorTable } from '../components/table/GuarantorTable';

export const GuarantorPage = () => {
    return (
        <DashboardPageContainer title="Dashboard - Penjamin" description="">
            <GuarantorTable />
        </DashboardPageContainer>
    );
};
