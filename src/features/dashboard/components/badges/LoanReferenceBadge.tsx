'use client';
import { BetweenHorizontalEnd } from 'lucide-react';
import { DashboardBadge } from '~/features/dashboard/components/badges/DashboardBadge';
import BadgeSkeleton from '../skeleton/badge/BadgeSkeleton';
import { useLoanReferencesStats } from '~/features/loan-reference/api/client';

export const LoanReferenceBadge = () => {
    const {
        data: loanReferencesStats,
        isLoading: isLoanReferencesStatsLoading,
    } = useLoanReferencesStats();

    if (isLoanReferencesStatsLoading) {
        return <BadgeSkeleton />;
    }

    return (
        <DashboardBadge
            icon={<BetweenHorizontalEnd size={25} />}
            iconBackground="bg-pink-500"
            label="Total Data Referensi"
            stat={loanReferencesStats?.length ?? 0}
            trend={loanReferencesStats?.trend}
            percentage={loanReferencesStats?.percentage}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-yellow-600 to-yellow-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
