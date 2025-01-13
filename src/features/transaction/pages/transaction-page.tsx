import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { Input } from '~/components/ui/input';
import { CreateTransactionDialog } from '../components/dialog/CreateTransactionDialog';
import { TransactionTable } from '../components/table/TransactionTable';

export const DashboardTransactionPage = () => {
    return (
        <DashboardContainer
            title="Transaksi"
            description="Kelola transaksi dari nasabah anda. Pastikan nasabah sudah memiliki data referensi sebelum membuat transaksi"
        >
            <nav className="flex gap-5 mb-5">
                <Input placeholder="search" />
                <CreateTransactionDialog />
            </nav>
            <TransactionTable />
        </DashboardContainer>
    );
};
