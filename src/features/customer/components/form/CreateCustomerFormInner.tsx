import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import {
    CreateCustomerFormSchema,
    createCustomerFormSchema,
} from '../../types';
import { Input } from '~/components/ui/input';

type CreateCustomerFormInnerProps = {
    form_id: string;
    onSubmit: (values: CreateCustomerFormSchema) => void;
};

export const CreateCustomerFormInner = (
    props: CreateCustomerFormInnerProps,
) => {
    const { form_id, onSubmit } = props;
    const form = useForm<CreateCustomerFormSchema>({
        defaultValues: {
            name: '',
        },
        resolver: zodResolver(createCustomerFormSchema),
    });

    return (
        <Form {...form}>
            <form
                id={form_id}
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
            >
                <div>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    );
};
