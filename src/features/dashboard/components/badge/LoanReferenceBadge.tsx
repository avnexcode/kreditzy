import { BetweenHorizontalEnd } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';

export const LoanReferenceBadge = () => {
    return (
        <Badge
            icon={<BetweenHorizontalEnd size={25} />}
            iconBackground="bg-pink-500"
            label="Total Data Referensi"
            stat={0}
            statLoading={true}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-yellow-600 to-yellow-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
