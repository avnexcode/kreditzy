import { EditPasswordForm } from '../components/form/EditPasswordForm';
import { SettingsContainer } from '~/components/layouts/SettingsContainer';

export const SettingsPasswordPage = () => {
    return (
        <SettingsContainer
            title="Reset Password"
            description="Managing user password to securely change their account password with required validation rules and confirmation"
        >
            <EditPasswordForm />
        </SettingsContainer>
    );
};
