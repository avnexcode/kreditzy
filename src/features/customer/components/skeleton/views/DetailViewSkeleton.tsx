import { Separator } from '@radix-ui/react-separator';
import { CustomerViewSkeleton } from './CustomerViewSkeleton';
import { GuarantorViewSkeleton } from '~/features/guarantor/components/skeleton/views/GuarantorViewSkeleton';

export const DetailViewSkeleton = () => {
    return (
        <div className="space-y-6">
            <CustomerViewSkeleton />
            <Separator orientation="horizontal" />
            <GuarantorViewSkeleton />
        </div>
    );
};
