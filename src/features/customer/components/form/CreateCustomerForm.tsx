import { useToast } from '~/hooks/use-toast';
import type { CreateCustomerFormSchema } from '../../types';
import { CreateCustomerFormInner } from './CreateCustomerFormInner';
import { useEffect } from 'react';
import { useCreateCustomer, useCustomers } from '../../api/client';

type CreateCustomerFormProps = {
    setIsOpen: (isOpen: boolean) => void;
    setIsPending: (isPending: boolean) => void;
};

export const CreateCustomerForm = ({
    setIsOpen,
    setIsPending,
}: CreateCustomerFormProps) => {
    const { toast } = useToast();
    const { refetch: refetchCustomers } = useCustomers();

    const { mutate: createCustomer, isPending: isCreateCustomerPending } =
        useCreateCustomer({
            onMutate: async () => {
                setIsPending(isCreateCustomerPending);
            },
            onSuccess: async () => {
                await refetchCustomers();
                setIsOpen(false);
                toast({
                    title: 'Success',
                    description: 'Berhasil menambahkan data nasabah',
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

    const onSubmit = (values: CreateCustomerFormSchema) =>
        createCustomer(values);

    useEffect(() => {
        if (!isCreateCustomerPending) {
            setIsPending(false);
        }
    }, [isCreateCustomerPending, setIsPending]);

    return (
        <CreateCustomerFormInner
            form_id="create-customer-form"
            onSubmit={onSubmit}
        />
    );
};
