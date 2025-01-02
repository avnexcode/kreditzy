import { type Metadata } from 'next';
import { Suspense } from 'react';
import { CustomerTableSkeleton } from '~/features/customer/components/skeleton/table/CustomerTableSkeleton';

export const metadata: Metadata = {
    title: 'Dashboard - Edit Data Referensi',
};

const DashboardEditLoanReferenceLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <Suspense fallback={<CustomerTableSkeleton />}>{children}</Suspense>;
};

export default DashboardEditLoanReferenceLayout;
