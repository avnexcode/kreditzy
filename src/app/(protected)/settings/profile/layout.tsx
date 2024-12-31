import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Settings - Profile',
};

const SettingsProfileLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default SettingsProfileLayout;
