import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Edit Nasabah',
};

const DashboardEditCustomerLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardEditCustomerLayout;
