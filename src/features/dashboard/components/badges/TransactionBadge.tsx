'use client';
import { NotebookText } from 'lucide-react';
import { DashboardBadge } from '~/features/dashboard/components/badges/DashboardBadge';
import { useTransactionsStats } from '~/features/transaction/api/client';
import BadgeSkeleton from '../skeleton/badge/BadgeSkeleton';

export const TransactionBadge = () => {
    const { data: transactionsStats, isLoading: isTransactionsStatsLoading } =
        useTransactionsStats();

    if (isTransactionsStatsLoading) {
        return <BadgeSkeleton />;
    }

    return (
        <DashboardBadge
            icon={<NotebookText size={25} />}
            iconBackground="bg-blue-500"
            label="Total Transaksi"
            stat={transactionsStats?.length ?? 0}
            trend={transactionsStats?.trend}
            percentage={transactionsStats?.percentage}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
