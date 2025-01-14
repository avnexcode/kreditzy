'use client';
import { ShieldCheck } from 'lucide-react';
import { DashboardBadge } from '~/features/dashboard/components/badges/DashboardBadge';
import { useGuarantorsStats } from '~/features/guarantor/api/client';
import BadgeSkeleton from '../skeleton/badge/BadgeSkeleton';

export const GuarantorBadge = () => {
    const { data: guarantorsStats, isLoading: isGuarantorsStatsLoading } =
        useGuarantorsStats();

    if (isGuarantorsStatsLoading) {
        return <BadgeSkeleton />;
    }

    return (
        <DashboardBadge
            icon={<ShieldCheck size={25} />}
            iconBackground="bg-green-500"
            label="Total Penjamin"
            stat={guarantorsStats?.length ?? 0}
            trend={guarantorsStats?.trend}
            percentage={guarantorsStats?.percentage}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-green-600 to-green-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
