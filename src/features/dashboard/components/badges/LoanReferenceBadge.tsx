import { BetweenHorizontalEnd } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';
import { getLoanReferencesCount } from '~/features/loan-reference/api/server';

export const LoanReferenceBadge = async () => {
    const loanReferencesCount = await getLoanReferencesCount();

    return (
        <Badge
            icon={<BetweenHorizontalEnd size={25} />}
            iconBackground="bg-pink-500"
            label="Total Data Referensi"
            stat={loanReferencesCount}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-yellow-600 to-yellow-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
