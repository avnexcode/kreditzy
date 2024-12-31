import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { EditProfileForm } from '../components/form/EditProfileForm';

export const SettingsProfilePage = () => {
    return (
        <DashboardContainer title="Settings - Profile" description="">
            <EditProfileForm />
        </DashboardContainer>
    );
};
