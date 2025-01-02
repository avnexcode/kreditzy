import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Detail Nasabah',
};

const DashboardDetailCustomerLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardDetailCustomerLayout;
