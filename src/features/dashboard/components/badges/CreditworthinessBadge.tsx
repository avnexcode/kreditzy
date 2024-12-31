import { AlertCircle, ListCheck } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';
import { getCreditWorthinessesCount } from '~/features/credit-worthiness/api/server';

export const CreditworthinessBadge = async () => {
    const creditWorthinessesCount = await getCreditWorthinessesCount();
    try {
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
    } catch {
        return (
            <Badge
                icon={<AlertCircle size={25} />}
                iconBackground="bg-red-500"
                label="Total Status Kelayakan"
                stat={0}
                error="Gagal memuat data"
                rootClassName="w-full"
                iconWrapperClassName="bg-gradient-to-tr from-red-600 to-red-400 text-white"
                statsClassName="bg-gray-50"
            />
        );
    }
};
