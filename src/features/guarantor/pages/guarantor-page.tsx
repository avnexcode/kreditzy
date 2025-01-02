import { Input } from '~/components/ui/input';
import { CreateGuarantorDialog } from '../components/dialog/CreateGuarantorDialog';
import { GuarantorTable } from '../components/table/GuarantorTable';
import { DashboardContainer } from '~/components/layouts/DashboardContainer';

export const DashboardGuarantorPage = () => {
    return (
        <DashboardContainer title="Penjamin Nasabah" description="">
            <nav className="flex gap-5 mb-5">
                <Input placeholder="search" />
                <CreateGuarantorDialog />
            </nav>
            <GuarantorTable />
        </DashboardContainer>
    );
};
