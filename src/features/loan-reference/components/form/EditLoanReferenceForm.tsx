'use client';
import { useToast } from '~/hooks/use-toast';
import { EditLoanReferenceFormInner } from './EditLoanReferenceFormInner';
import { useParams, useRouter } from 'next/navigation';
import { EditLoanReferenceFormLayout } from '../layout/EditLoanReferenceFormLayout';
import type { UpdateLoanReferenceFormSchema } from '../../types';
import { useUpdateLoanReference } from '../../api';

export const EditLoanReferenceForm = () => {
    const params: { id: string } = useParams();
    const { toast } = useToast();
    const router = useRouter();

    const {
        mutate: updateLoanReference,
        isPending: isUpdateLoanReferencePending,
    } = useUpdateLoanReference({
        id: params.id,
        onSuccess: async () => {
            toast({
                title: 'Success',
                description: 'Berhasil memperbarui data referensi',
            });
            router.push('/dashboard/loan-reference');
        },
        onError: async error => {
            toast({
                title: 'Error',
                variant: 'destructive',
                description:
                    error.response?.data.error ??
                    error.message ??
                    'Gagal memperbarui data referensi',
            });
        },
    });

    const onSubmit = (values: UpdateLoanReferenceFormSchema) =>
        updateLoanReference(values);

    return (
        <EditLoanReferenceFormLayout
            form_id="update-loan-reference-form"
            isPending={isUpdateLoanReferencePending}
        >
            <EditLoanReferenceFormInner
                loanReferenceId={params.id}
                form_id="update-loan-reference-form"
                onSubmit={onSubmit}
            />
        </EditLoanReferenceFormLayout>
    );
};
