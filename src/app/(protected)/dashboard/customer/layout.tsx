import { type Metadata } from 'next';
import { Suspense } from 'react';
import { CustomerTableSkeleton } from '~/features/customer/components/skeleton/TableCustomerSkeleton';

export const metadata: Metadata = {
    title: 'Dashboard - Nasabah',
};

const DashboardCustomerLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <Suspense fallback={<CustomerTableSkeleton />}>{children}</Suspense>;
};

export default DashboardCustomerLayout;
