'use client';
import { useToast } from '~/hooks/use-toast';
import { EditPasswordFormLayout } from '../layout/EditPasswordFormLayout';
import { EditPasswordFormInner } from './EditPasswordFormInner';
import { useDebouncedCallback } from 'use-debounce';
import { useUpdatePassword } from '../../api/client/useUpdatePassword';
import { signOut, useSession } from 'next-auth/react';
import { type UpdatePasswordSchema } from '../../types';

export const EditPasswordForm = () => {
    const { toast } = useToast();
    const { data: session } = useSession();

    const { mutate: updatePassword, isPending: isUpdatePasswordPending } =
        useUpdatePassword({
            id: session?.user.id,
            onSuccess: async () => {
                toast({
                    title: 'Success',
                    description: 'Success update passowrd',
                });
                await signOut();
            },
            onError: async error => {
                toast({
                    title: 'Success',
                    variant: 'destructive',
                    description:
                        error.response?.data.error ??
                        error.message ??
                        'Invalid credentials',
                });
            },
        });

    const onSubmit = useDebouncedCallback(
        (values: UpdatePasswordSchema) => updatePassword(values),
        1000,
    );

    return (
        <EditPasswordFormLayout
            form_id="update-password-form"
            isPending={isUpdatePasswordPending}
        >
            <EditPasswordFormInner
                form_id="update-password-form"
                onSubmit={onSubmit}
            />
        </EditPasswordFormLayout>
    );
};
