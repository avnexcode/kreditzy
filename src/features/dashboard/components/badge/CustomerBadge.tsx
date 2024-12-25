'use client';
import { Users } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';
import { useCustomersCount } from '~/features/customer/api';

export const CustomerBadge = () => {
    const { data: customerCount } = useCustomersCount();
    return (
        <Badge
            icon={<Users size={25} />}
            iconBackground="bg-pink-500"
            label="Total Customers"
            stat={customerCount ? customerCount : '0'}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-pink-600 to-pink-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
