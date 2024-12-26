'use client';
import { ShieldCheck } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';
import { useGuarantorsCount } from '~/features/guarantor/api';

export const GuarantorBadge = () => {
    const { data: guarantorsCount, isLoading: isGuarantorsLoading } =
        useGuarantorsCount();
    return (
        <Badge
            icon={<ShieldCheck size={25} />}
            iconBackground="bg-green-500"
            label="Total Penjamin"
            stat={guarantorsCount ? guarantorsCount : 0}
            statLoading={isGuarantorsLoading}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-green-600 to-green-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
