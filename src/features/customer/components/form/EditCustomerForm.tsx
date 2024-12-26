'use client';
import { useToast } from '~/hooks/use-toast';
import { useUpdateCustomer } from '../../api';
import { type UpdateCustomerFormSchema } from '../../types';
import { EditCustomerFormLayout } from '../layout/EditCustomerFormLayout';
import { EditCustomerFormInner } from './EditCustomerFormInner';
import { useParams, useRouter } from 'next/navigation';

export const EditCustomerForm = () => {
    const params: { id: string } = useParams();
    const { toast } = useToast();
    const router = useRouter();

    const { mutate: updateCustomer, isPending: isUpdateCustomerPending } =
        useUpdateCustomer({
            id: params.id,
            onSuccess: async () => {
                toast({
                    title: 'Success',
                    description: 'Berhasil memperbarui data nasabah',
                });
                router.push('/dashboard/customer');
            },
            onError: async error => {
                toast({
                    title: 'Error',
                    variant: 'destructive',
                    description:
                        error.response?.data.error ??
                        error.message ??
                        'Gagal memperbarui data nasabah',
                });
            },
        });

    const onSubmit = (values: UpdateCustomerFormSchema) =>
        updateCustomer(values);

    return (
        <EditCustomerFormLayout
            form_id="update-customer-form"
            isPending={isUpdateCustomerPending}
        >
            <EditCustomerFormInner
                customerId={params.id}
                form_id="update-customer-form"
                onSubmit={onSubmit}
            />
        </EditCustomerFormLayout>
    );
};
