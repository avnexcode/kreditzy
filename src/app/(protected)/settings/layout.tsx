import { DashboardLayout } from '~/components/layouts/DashboardLayout';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Settings',
};

const SettingsLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <DashboardLayout>{children}</DashboardLayout>;
};

export default SettingsLayout;
