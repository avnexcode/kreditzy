import { EditProfileFormSkeleton } from '../form/EditProfileFormSkeleton';
import { SettingsSkeletonContainer } from '~/components/skeleton/layouts/SettingsSkeletonContainer';

export const EditProfilePageSkeleton = () => {
    return (
        <SettingsSkeletonContainer>
            <EditProfileFormSkeleton />
        </SettingsSkeletonContainer>
    );
};
