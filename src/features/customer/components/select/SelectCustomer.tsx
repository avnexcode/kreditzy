import type { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import {
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
import { useCustomers } from '../../api/client';

type SelectCustomerProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    name: Path<T>;
    label?: string;
};

export const SelectCustomer = <T extends FieldValues>({
    form,
    name,
    label,
}: SelectCustomerProps<T>) => {
    const { data: customers } = useCustomers();

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label ?? 'Pilih Nasabah'}</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                            <SelectTrigger className="capitalize">
                                <SelectValue placeholder="Pilih nasabah" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {customers?.map(customer => (
                                <SelectItem
                                    key={customer.id}
                                    value={customer.id}
                                    className="capitalize"
                                >
                                    {customer.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
