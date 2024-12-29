import { ListCheck } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';
import { getCreditWorthinessesCount } from '~/features/credit-worthiness/api/server/getCreditWorthinessesCount';

export const CreditworthinessBadge = async () => {
    const creditWorthinessesCount = await getCreditWorthinessesCount();
    console.log(creditWorthinessesCount);
    return (
        <Badge
            icon={<ListCheck size={25} />}
            iconBackground="bg-pink-500"
            label="Total Status Kelayakan"
            stat={creditWorthinessesCount}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-purple-600 to-purple-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
