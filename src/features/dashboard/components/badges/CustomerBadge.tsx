import { AlertCircle, Users } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';
import { getCustomersCount } from '~/features/customer/api/server';

export const CustomerBadge = async () => {
    const customersCount = await getCustomersCount();
    try {
        return (
            <Badge
                icon={<Users size={25} />}
                iconBackground="bg-pink-500"
                label="Total Nasabah"
                stat={customersCount ?? 0}
                trend={12}
                trendLabel="compared to last month"
                rootClassName="w-full"
                iconWrapperClassName="bg-gradient-to-tr from-pink-600 to-pink-400 text-white"
                statsClassName="bg-gray-50"
                trendClassName="bg-gray-100"
            />
        );
    } catch {
        return (
            <Badge
                icon={<AlertCircle size={25} />}
                iconBackground="bg-red-500"
                label="Total Nasabah"
                stat={0}
                error="Gagal memuat data"
                rootClassName="w-full"
                iconWrapperClassName="bg-gradient-to-tr from-red-600 to-red-400 text-white"
                statsClassName="bg-gray-50"
            />
        );
    }
};
