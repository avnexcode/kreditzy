import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { EditPasswordForm } from '../components/form/EditPasswordForm';

export const SettingsPasswordPage = () => {
    return (
        <DashboardContainer title="Settings - Perbarui Password" description="">
            <EditPasswordForm />
        </DashboardContainer>
    );
};
