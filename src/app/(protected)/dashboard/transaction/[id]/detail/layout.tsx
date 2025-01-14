import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Detail Transaksi',
};

const DashboardDetailTransactionLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardDetailTransactionLayout;
