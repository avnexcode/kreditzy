import { NotebookText } from 'lucide-react';
import { DashboardBadge } from '~/features/dashboard/components/badges/DashboardBadge';

export const TransactionBadge = () => {
    return (
        <DashboardBadge
            icon={<NotebookText size={25} />}
            iconBackground="bg-blue-500"
            label="Total Transaksi"
            stat={0}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
