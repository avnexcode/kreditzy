import { useToast } from '~/hooks/use-toast';
import { CreateTransactionFormInner } from './CreateTransactionFormInner';
import type { CreateTransactionFormSchema } from '../../types';
import { useCreateTransaction, useTransactions } from '../../api/client';

type CreateTransactionFormProps = {
    setIsOpen: (isOpen: boolean) => void;
    setIsPending: (isPending: boolean) => void;
};

export const CreateTransactionForm = ({
    setIsOpen,
    setIsPending,
}: CreateTransactionFormProps) => {
    const { refetch: refetchTransactions } = useTransactions();
    const { toast } = useToast();

    const { mutate: createTransaction, isPending: isCreateTransactionPending } =
        useCreateTransaction({
            onMutate: async () => {
                setIsPending(isCreateTransactionPending);
            },
            onSuccess: async () => {
                await refetchTransactions();
                setIsOpen(false);
                toast({
                    title: 'Success',
                    description: 'Berhasil membuat transaksi nasabah',
                });
            },
            onError: async error => {
                setIsOpen(false);
                toast({
                    title: 'Error',
                    variant: 'destructive',
                    description:
                        error.response?.data.error ??
                        error.message ??
                        'Invalid input',
                });
            },
        });

    const onSubmit = (values: CreateTransactionFormSchema) =>
        createTransaction(values);
    return (
        <CreateTransactionFormInner
            form_id="create-transaction-form"
            onSubmit={onSubmit}
        />
    );
};
