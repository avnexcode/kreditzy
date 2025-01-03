import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Edit Data Referensi',
};

const DashboardEditLoanReferenceLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardEditLoanReferenceLayout;
