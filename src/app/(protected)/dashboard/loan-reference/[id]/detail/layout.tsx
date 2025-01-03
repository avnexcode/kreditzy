import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Detail Data Referensi',
};

const DashboardDetailLoanReferenceLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardDetailLoanReferenceLayout;
