import { EditPasswordForm } from '../components/form/EditPasswordForm';
import { SettingsContainer } from '~/components/layouts/SettingsContainer';

export const SettingsPasswordPage = () => {
    return (
        <SettingsContainer title="Reset Password" description="">
            <EditPasswordForm />
        </SettingsContainer>
    );
};
