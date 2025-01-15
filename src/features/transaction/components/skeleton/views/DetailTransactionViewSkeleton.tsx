import { LoanBalanceViewSkeleton } from '~/features/loan-balance/components/skeleton/view/LoanBalanceViewSkeleton';
import { TransactionViewSkeleton } from './TransactionViewSkeleton';

export const DetailTransactionViewSkeleton = () => {
    return (
        <>
            <TransactionViewSkeleton customerName={true} />
            <LoanBalanceViewSkeleton />
        </>
    );
};
