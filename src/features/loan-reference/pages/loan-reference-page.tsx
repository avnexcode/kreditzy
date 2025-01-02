import { Input } from '~/components/ui/input';
import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { LoanReferenceTable } from '../components/table/LoanReferenceTable';
import { CreateLoanReferenceDialog } from '../components/dialog/CreateLoanReferenceDialog';

export const DashboardLoanReferencePage = () => {
    return (
        <DashboardContainer title="Data Referensi Nasabah" description="">
            <nav className="flex gap-5 mb-5">
                <Input placeholder="search" />
                <CreateLoanReferenceDialog />
            </nav>
            <LoanReferenceTable />
        </DashboardContainer>
    );
};
