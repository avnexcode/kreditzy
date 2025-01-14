import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Edit Transaksi',
};

const DashboardEditTransactionLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardEditTransactionLayout;
