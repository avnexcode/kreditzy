import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Settings - Reset Password',
};

const SettingsResetPasswordLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <>{children}</>;
};

export default SettingsResetPasswordLayout;
