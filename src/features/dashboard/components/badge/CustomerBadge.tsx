import { Users } from 'lucide-react';
import { Badge } from '~/components/elements/badge';

export const CustomerBadge = () => {
    return (
        <Badge
            icon={<Users size={25} />}
            iconBackground="bg-pink-500"
            label="Total Customers"
            stat={15423}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-pink-600 to-pink-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
