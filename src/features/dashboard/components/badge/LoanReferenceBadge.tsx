import { AlertCircle, BetweenHorizontalEnd } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';
import { getLoanReferencesCount } from '~/features/loan-reference/api/server/getLoanReferencesCount';

export const LoanReferenceBadge = async () => {
    const loanReferencesCount = await getLoanReferencesCount();
    try {
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
    } catch {
        <Badge
            icon={<AlertCircle size={25} />}
            iconBackground="bg-red-500"
            label="Total Data Referensi"
            stat={0}
            error="Gagal memuat data"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-red-600 to-red-400 text-white"
            statsClassName="bg-gray-50"
        />;
    }
};
