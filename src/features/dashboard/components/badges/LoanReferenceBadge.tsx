'use client';
import { BetweenHorizontalEnd } from 'lucide-react';
import { Badge } from '~/features/dashboard/components/badges/DashboardBadge';
import { useLoanReferencesCount } from '~/features/loan-reference/api/client';
import BadgeSkeleton from '../skeleton/badge/BadgeSkeleton';

export const LoanReferenceBadge = () => {
    const {
        data: loanReferencesCount,
        isLoading: isLoanReferencesCountLoading,
    } = useLoanReferencesCount();

    if (isLoanReferencesCountLoading) {
        return <BadgeSkeleton />;
    }

    return (
        <Badge
            icon={<BetweenHorizontalEnd size={25} />}
            iconBackground="bg-pink-500"
            label="Total Data Referensi"
            stat={loanReferencesCount ?? 0}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-yellow-600 to-yellow-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
