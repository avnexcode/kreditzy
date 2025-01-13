import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Data Referensi',
};

const DashboardLoanReferenceLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardLoanReferenceLayout;
