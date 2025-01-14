'use client';
import { NotebookText } from 'lucide-react';
import { DashboardBadge } from '~/features/dashboard/components/badges/DashboardBadge';
import { useTransactionsCount } from '~/features/transaction/api/client';
import BadgeSkeleton from '../skeleton/badge/BadgeSkeleton';

export const TransactionBadge = () => {
    const { data: transactionsCount, isLoading: isTransactionsCountLoading } =
        useTransactionsCount();

    if (isTransactionsCountLoading) {
        return <BadgeSkeleton />;
    }

    return (
        <DashboardBadge
            icon={<NotebookText size={25} />}
            iconBackground="bg-blue-500"
            label="Total Transaksi"
            stat={transactionsCount ?? 0}
            trend={'increase'}
            percentage={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
