import { UseFormReturn } from 'react-hook-form';
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
import {
    CreateGuarantorFormSchema,
    UpdateGuarantorFormSchema,
} from '../../types';
import { useCustomers } from '~/features/customer/api';

type SelectCustomerGuarantorFormProps = {
    customer_id?: string;
    form: UseFormReturn<UpdateGuarantorFormSchema | CreateGuarantorFormSchema>;
};

export const SelectCustomerGuarantorForm = ({
    customer_id,
    form,
}: SelectCustomerGuarantorFormProps) => {
    const { data: customers } = useCustomers();

    return (
        <FormField
            control={form.control}
            name="customer_id"
            defaultValue={customer_id}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Nasabah yang di jamin</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                            <SelectTrigger className="capitalize">
                                <SelectValue placeholder="Pilih nasabah" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {customers?.map((customer, index) => (
                                <SelectItem
                                    key={index}
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
