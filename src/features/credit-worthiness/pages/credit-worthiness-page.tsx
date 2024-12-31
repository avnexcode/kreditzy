import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { CreditWorthinessTable } from '../components/table/CreditWorthinessTable';

export const DashboardCreditWorthinessPage = () => {
    return (
        <DashboardContainer
            title="Dashboard - Kelayakan Kredit Nasabah"
            description=""
        >
            <CreditWorthinessTable />
        </DashboardContainer>
    );
};
