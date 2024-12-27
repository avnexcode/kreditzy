'use client';
import { BetweenHorizontalEnd } from 'lucide-react';
import { Badge } from '~/components/elements/Badge';
import { useLoanReferencesCount } from '~/features/loan-reference/api';

export const LoanReferenceBadge = () => {
    const { data: loanReferencesCount, isLoading: isLoanReferencesLoading } =
        useLoanReferencesCount();
    return (
        <Badge
            icon={<BetweenHorizontalEnd size={25} />}
            iconBackground="bg-pink-500"
            label="Total Data Referensi"
            stat={loanReferencesCount ?? 0}
            statLoading={isLoanReferencesLoading}
            trend={12}
            trendLabel="compared to last month"
            rootClassName="w-full"
            iconWrapperClassName="bg-gradient-to-tr from-yellow-600 to-yellow-400 text-white"
            statsClassName="bg-gray-50"
            trendClassName="bg-gray-100"
        />
    );
};
