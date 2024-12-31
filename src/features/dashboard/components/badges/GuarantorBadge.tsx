import { AlertCircle, ShieldCheck } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';
import { getGuarantorsCount } from '~/features/guarantor/api/server';

export const GuarantorBadge = async () => {
    const guarantorsCount = await getGuarantorsCount();
    try {
        return (
            <Badge
                icon={<ShieldCheck size={25} />}
                iconBackground="bg-green-500"
                label="Total Penjamin"
                stat={guarantorsCount ?? 0}
                trend={12}
                trendLabel="compared to last month"
                rootClassName="w-full"
                iconWrapperClassName="bg-gradient-to-tr from-green-600 to-green-400 text-white"
                statsClassName="bg-gray-50"
                trendClassName="bg-gray-100"
            />
        );
    } catch {
        return (
            <Badge
                icon={<AlertCircle size={25} />}
                iconBackground="bg-red-500"
                label="Total Penjamin"
                stat={0}
                error="Gagal memuat data"
                rootClassName="w-full"
                iconWrapperClassName="bg-gradient-to-tr from-red-600 to-red-400 text-white"
                statsClassName="bg-gray-50"
            />
        );
    }
};
