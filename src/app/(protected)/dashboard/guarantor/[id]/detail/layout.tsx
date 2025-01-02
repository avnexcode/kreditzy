import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Detail Penjamin Nasabah',
};

const DashboardDetailGuarantorLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardDetailGuarantorLayout;
