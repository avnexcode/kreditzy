import { SettingsSkeletonContainer } from '~/components/layouts/SettingsSkeletonContainer';
import { EditPasswordFormSkeleton } from '../form/EditPasswordFormSkeleton';

export const EditPasswordPageSkeleton = () => {
    return (
        <SettingsSkeletonContainer>
            <EditPasswordFormSkeleton />
        </SettingsSkeletonContainer>
    );
};
