'use client';
import { Users } from 'lucide-react';
import { DashboardBadge } from '~/features/dashboard/components/badges/DashboardBadge';
import { useCustomersStats } from '~/features/customer/api/client';
import BadgeSkeleton from '../skeleton/badge/BadgeSkeleton';

export const CustomerBadge = () => {
    const { data: customersStats, isLoading: isCustomersStatsLoading } =
        useCustomersStats();

    if (isCustomersStatsLoading) {
        return <BadgeSkeleton />;
    }

    return (
        <DashboardBadge
            icon={<Users size={25} />}
            iconBackground="bg-pink-500"
            label="Total Nasabah"
            stat={customersStats?.length ?? 0}
            trend={customersStats?.trend}
            percentage={customersStats?.percentage}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-pink-600 to-pink-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
