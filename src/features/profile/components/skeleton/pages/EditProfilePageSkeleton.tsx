import { EditProfileFormSkeleton } from '../form/EditProfileFormSkeleton';
import { SettingsSkeletonContainer } from '~/components/layouts/SettingsSkeletonContainer';

export const EditProfilePageSkeleton = () => {
    return (
        <SettingsSkeletonContainer>
            <EditProfileFormSkeleton />
        </SettingsSkeletonContainer>
    );
};
