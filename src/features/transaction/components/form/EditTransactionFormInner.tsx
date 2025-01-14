import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import {
    updateTransactionFormSchema,
    type UpdateTransactionFormSchema,
} from '../../types';
import { SelectCustomer } from '~/features/customer/components/select/SelectCustomer';
import { useTransactionId } from '../../api/client';
import { TransactionStatus } from '@prisma/client';
import { EditTransactionFormInnerSkeleton } from '../skeleton/form/EditTransactionFormInnerSkeleton';

type EditTransactionFormInnerProps = {
    TransactionId: string;
    form_id: string;
    onSubmit: (values: UpdateTransactionFormSchema) => void;
};

export const EditTransactionFormInner = ({
    TransactionId,
    form_id,
    onSubmit,
}: EditTransactionFormInnerProps) => {
    const { data: transaction, isLoading: isTransactionLoading } =
        useTransactionId(TransactionId);

    const form = useForm<UpdateTransactionFormSchema>({
        defaultValues: {
            customer_id: '',
            transaction_status: TransactionStatus.ACTIVE,
        },
        resolver: zodResolver(updateTransactionFormSchema),
    });

    useEffect(() => {
        if (transaction) {
            form.reset({
                customer_id: transaction.customer_id,
                transaction_status: transaction.transaction_status,
            });
        }
    }, [form, transaction]);

    if (isTransactionLoading) {
        return <EditTransactionFormInnerSkeleton />;
    }

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
                <div>
                    <FormField
                        control={form.control}
                        name="transaction_status"
                        render={({ field: { onChange, value } }) => (
                            <FormItem>
                                <FormLabel>Status Transaksi</FormLabel>
                                <Select onValueChange={onChange} value={value}>
                                    <FormControl>
                                        <SelectTrigger className="capitalize">
                                            <SelectValue placeholder="Pilih status transaksi" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem
                                            value="ACTIVE"
                                            className="capitalize"
                                        >
                                            Pinjaman Aktif/Sedang Berjalan
                                        </SelectItem>
                                        <SelectItem
                                            value="CANCELED"
                                            className="capitalize"
                                        >
                                            Pinjaman Dibatalkan
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    );
};
