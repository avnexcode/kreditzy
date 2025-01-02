import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { CreditWorthinessTable } from '../components/table/CreditWorthinessTable';

export const DashboardCreditWorthinessPage = () => {
    return (
        <DashboardContainer
            title="Kelayakan Kredit Nasabah"
            description="Data kelayakan kredit dari nasabah anda. Data bisa sewaktu - waktu berubah berdasarkan data referensi nasabah"
        >
            <CreditWorthinessTable />
        </DashboardContainer>
    );
};
