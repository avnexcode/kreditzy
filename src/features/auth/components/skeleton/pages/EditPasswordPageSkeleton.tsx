import { SettingsSkeletonContainer } from '~/components/skeleton/layouts/SettingsSkeletonContainer';
import { EditPasswordFormSkeleton } from '../form/EditPasswordFormSkeleton';

export const EditPasswordPageSkeleton = () => {
    return (
        <SettingsSkeletonContainer>
            <EditPasswordFormSkeleton />
        </SettingsSkeletonContainer>
    );
};
