import { Form } from '~/components/ui/form';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    createTransactionFormSchema,
    type CreateTransactionFormSchema,
} from '../../types';
import { SelectCustomer } from '~/features/customer/components/select/SelectCustomer';

type CreateTransactionFormInnerProps = {
    form_id: string;
    onSubmit: (values: CreateTransactionFormSchema) => void;
};

export const CreateTransactionFormInner = ({
    form_id,
    onSubmit,
}: CreateTransactionFormInnerProps) => {
    const form = useForm<CreateTransactionFormSchema>({
        defaultValues: {
            customer_id: '',
        },
        resolver: zodResolver(createTransactionFormSchema),
    });

    return (
        <Form {...form}>
            <form
                id={form_id}
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
            >
                <div>
                    <SelectCustomer form={form} name="customer_id" />
                </div>
            </form>
        </Form>
    );
};
