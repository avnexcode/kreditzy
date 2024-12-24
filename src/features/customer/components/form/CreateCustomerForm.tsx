'use client';
import { useToast } from '~/hooks/use-toast';
import { useCreateCustomer } from '../../api/useCreateCustomer';
import type { CreateCustomerFormSchema } from '../../types';
import { CreateCustomerFormInner } from './CreateCustomerFormInner';

export const CreateCustomerForm = () => {
    const { toast } = useToast();
    const { mutate: createCustomer } = useCreateCustomer({
        onSuccess: async () => {
            toast({
                title: 'Success',
                description: 'Success create new customer',
            });
        },
        onError: async error => {
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

    return (
        <CreateCustomerFormInner
            form_id="create-customer-form"
            onSubmit={onSubmit}
        />
    );
};
