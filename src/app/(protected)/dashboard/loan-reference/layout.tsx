import { type Metadata } from 'next';
import { Suspense } from 'react';
import { CustomerTableSkeleton } from '~/features/customer/components/skeleton/table/CustomerTableSkeleton';

export const metadata: Metadata = {
    title: 'Dashboard - Data Referensi',
};

const DashboardLoanReferenceLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <Suspense fallback={<CustomerTableSkeleton />}>{children}</Suspense>;
};

export default DashboardLoanReferenceLayout;
