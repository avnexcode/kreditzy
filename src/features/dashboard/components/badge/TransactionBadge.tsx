import { NotebookText } from 'lucide-react';
import { Badge } from '~/components/elements/badge';

export const TransactionBadge = () => {
    return (
        <Badge
            icon={<NotebookText size={25} />}
            iconBackground="bg-blue-500"
            label="Total Transaksi"
            stat={15423}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
