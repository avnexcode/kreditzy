import { ListCheck } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';

export const CreditworthinessBadge = () => {
    return (
        <Badge
            icon={<ListCheck size={25} />}
            iconBackground="bg-pink-500"
            label="Total Status Kelayakan"
            stat={0}
            statLoading={true}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-purple-600 to-purple-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
