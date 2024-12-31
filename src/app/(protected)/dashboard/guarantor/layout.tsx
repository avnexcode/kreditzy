import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Penjamin Nasabah',
};

const DashboardGuarantorLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardGuarantorLayout;
