'use client';
import { ListCheck } from 'lucide-react';
import { DashboardBadge } from '~/features/dashboard/components/badges/DashboardBadge';
import BadgeSkeleton from '../skeleton/badge/BadgeSkeleton';
import { useCreditWorthinessesStats } from '~/features/credit-worthiness/api/client';

export const CreditworthinessBadge = () => {
    const {
        data: creditWorthinessesStats,
        isLoading: isCreditWorthinessesStatsLoading,
    } = useCreditWorthinessesStats();

    if (isCreditWorthinessesStatsLoading) {
        return <BadgeSkeleton />;
    }

    return (
        <DashboardBadge
            icon={<ListCheck size={25} />}
            iconBackground="bg-pink-500"
            label="Total Status Kelayakan"
            stat={creditWorthinessesStats?.length ?? 0}
            trend={creditWorthinessesStats?.trend}
            percentage={creditWorthinessesStats?.percentage}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-purple-600 to-purple-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
