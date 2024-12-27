'use client';
import { Users } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';
import { useCustomersCount } from '~/features/customer/api';

export const CustomerBadge = () => {
    const { data: customersCount, isLoading: isCustomersCountLoading } =
        useCustomersCount();
    return (
        <Badge
            icon={<Users size={25} />}
            iconBackground="bg-pink-500"
            label="Total Nasabah"
            stat={customersCount ?? 0}
            statLoading={isCustomersCountLoading}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-pink-600 to-pink-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
