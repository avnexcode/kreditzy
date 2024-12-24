import { ShieldCheck } from 'lucide-react';
import { Badge } from '~/components/elements/badge';

export const GuarantorBadge = () => {
    return (
        <Badge
            icon={<ShieldCheck size={25} />}
            iconBackground="bg-green-500"
            label="Total Penjamin"
            stat={15423}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-green-600 to-green-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
