import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Nasabah',
};

const DashboardCustomerLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardCustomerLayout;
