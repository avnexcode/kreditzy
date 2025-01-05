'use client';
import { ListCheck } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';
import { useCreditWorthinessCount } from '~/features/credit-worthiness/api/client';
import BadgeSkeleton from '../skeleton/badge/BadgeSkeleton';

export const CreditworthinessBadge = () => {
    const {
        data: creditWorthinessesCount,
        isLoading: isCreditWorthinessesCountLoading,
    } = useCreditWorthinessCount();

    if (isCreditWorthinessesCountLoading) {
        return <BadgeSkeleton />;
    }

    return (
        <Badge
            icon={<ListCheck size={25} />}
            iconBackground="bg-pink-500"
            label="Total Status Kelayakan"
            stat={creditWorthinessesCount ?? 0}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-purple-600 to-purple-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
