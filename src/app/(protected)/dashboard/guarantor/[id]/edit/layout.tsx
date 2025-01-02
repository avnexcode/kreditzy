import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Edit Penjamin Nasabah',
};

const DashboardEditGuarantorLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardEditGuarantorLayout;
