import { DashboardLayout as DashboardLayoutComponent } from '~/components/layouts/DashboardLayout';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard',
};

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>;
};

export default DashboardLayout;
