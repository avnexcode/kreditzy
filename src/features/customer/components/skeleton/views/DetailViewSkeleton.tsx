import { CreditWorthinessViewSkeleton } from '~/features/credit-worthiness/components/skeleton/views/CreditWorthinessViewSkeleton';
import { CustomerViewSkeleton } from './CustomerViewSkeleton';
import { GuarantorViewSkeleton } from '~/features/guarantor/components/skeleton/views/GuarantorViewSkeleton';
import { LoanReferenceViewSkeleton } from '~/features/loan-reference/components/skeleton/views/LoanReferenceViewSkeleton';

export const DetailViewSkeleton = () => {
    return (
        <div className="space-y-6">
            <CustomerViewSkeleton />
            <GuarantorViewSkeleton />
            <LoanReferenceViewSkeleton customerName={false} />
            <CreditWorthinessViewSkeleton />
        </div>
    );
};
