'use client';
import { useToast } from '~/hooks/use-toast';
import { EditTransactionFormInner } from './EditTransactionFormInner';
import { useParams, useRouter } from 'next/navigation';
import { EditTransactionFormLayout } from '../layout/EditTransactionFormLayout';
import type { UpdateTransactionFormSchema } from '../../types';
import { useUpdateTransaction } from '../../api/client';

export const EditTransactionForm = () => {
    const params: { id: string } = useParams();
    const { toast } = useToast();
    const router = useRouter();

    const { mutate: updateTransaction, isPending: isUpdateTransactionPending } =
        useUpdateTransaction({
            id: params.id,
            onSuccess: async () => {
                toast({
                    title: 'Success',
                    description: 'Berhasil memperbarui transaksi',
                });
                router.push('/dashboard/transaction');
            },
            onError: async error => {
                toast({
                    title: 'Error',
                    variant: 'destructive',
                    description:
                        error.response?.data.error ??
                        error.message ??
                        'Gagal memperbarui transaksi',
                });
            },
        });

    const onSubmit = (values: UpdateTransactionFormSchema) =>
        updateTransaction(values);

    return (
        <EditTransactionFormLayout
            form_id="update-transaction-form"
            isPending={isUpdateTransactionPending}
        >
            <EditTransactionFormInner
                TransactionId={params.id}
                form_id="update-transaction-form"
                onSubmit={onSubmit}
            />
        </EditTransactionFormLayout>
    );
};
