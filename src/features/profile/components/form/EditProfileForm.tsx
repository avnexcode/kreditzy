'use client';
import { useToast } from '~/hooks/use-toast';
import { useUpdateProfile } from '../../api/client';
import type { UpdateProfileFormSchema } from '../../types';
import { EditProfileFormLayout } from '../layout/EditProfileFormLayout';
import { EditProfileFormInner } from './EditProfileFormInner';
import { useSession } from 'next-auth/react';

export const EditProfileForm = () => {
    const { toast } = useToast();
    const { data: session } = useSession();

    const { mutate: updateProfile, isPending: isUpdateProfilePending } =
        useUpdateProfile({
            id: session?.user.id,
            onSuccess: async () => {
                toast({
                    title: 'Success',
                    description: 'Berhasil memperbarui profile',
                });
            },
            onError: async error => {
                toast({
                    title: 'Error',
                    variant: 'destructive',
                    description:
                        error.message ??
                        error.response?.data.error ??
                        'Terjadi kesalahan',
                });
            },
        });

    const onSubmit = (values: UpdateProfileFormSchema) => updateProfile(values);

    return (
        <EditProfileFormLayout
            form_id="update-profile-form"
            isPending={isUpdateProfilePending}
        >
            <EditProfileFormInner
                form_id="update-profile-form"
                onSubmit={onSubmit}
                userId={session?.user.id ?? ''}
            />
        </EditProfileFormLayout>
    );
};
