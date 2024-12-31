import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - Kelayakan Kredit Nasabah',
};

const DashboardCreditWorthinessLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default DashboardCreditWorthinessLayout;
