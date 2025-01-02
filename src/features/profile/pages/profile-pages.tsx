import { EditProfileForm } from '../components/form/EditProfileForm';
import { SettingsContainer } from '~/components/layouts/SettingsContainer';

export const SettingsProfilePage = () => {
    return (
        <SettingsContainer title="Profile" description="">
            <EditProfileForm />
        </SettingsContainer>
    );
};
