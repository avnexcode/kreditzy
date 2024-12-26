'use client';
import { useToast } from '~/hooks/use-toast';
import { EditGuarantorFormInner } from './EditGuarantorFormInner';
import { useParams, useRouter } from 'next/navigation';
import { useUpdateGuarantor } from '../../api';
import { UpdateGuarantorFormSchema } from '../../types';
import { EditGuarantorFormLayout } from '../layout/EditGuarantorFormLayout';

export const EditGuarantorForm = () => {
    const params: { id: string } = useParams();
    const { toast } = useToast();
    const router = useRouter();

    const { mutate: updateGuarantor, isPending: isUpdateGuarantorPending } =
        useUpdateGuarantor({
            id: params.id,
            onSuccess: async () => {
                toast({
                    title: 'Success',
                    description: 'Berhasil memperbarui data penjamin',
                });
                router.push('/dashboard/guarantor');
            },
            onError: async error => {
                toast({
                    title: 'Error',
                    variant: 'destructive',
                    description:
                        error.response?.data.error ??
                        error.message ??
                        'Gagal memperbarui data penjamin',
                });
            },
        });

    const onSubmit = (values: UpdateGuarantorFormSchema) =>
        updateGuarantor(values);

    return (
        <EditGuarantorFormLayout
            form_id="update-guarantor-form"
            isPending={isUpdateGuarantorPending}
        >
            <EditGuarantorFormInner
                guarantorId={params.id}
                form_id="update-guarantor-form"
                onSubmit={onSubmit}
            />
        </EditGuarantorFormLayout>
    );
};
