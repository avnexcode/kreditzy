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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '~/components/ui/input';
import { inputHandle, inputParse } from '~/utils/form-input';
import {
    createLoanReferenceFormSchema,
    type CreateLoanReferenceFormSchema,
} from '../../types';
import { toIDR } from '~/utils/convert-currency';
import { SelectCustomer } from '~/features/customer/components/select/SelectCustomer';

type CreateLoanReferenceFormInnerProps = {
    form_id: string;
    onSubmit: (values: CreateLoanReferenceFormSchema) => void;
};

export const CreateLoanReferenceFormInner = ({
    form_id,
    onSubmit,
}: CreateLoanReferenceFormInnerProps) => {
    const form = useForm<CreateLoanReferenceFormSchema>({
        defaultValues: {
            customer_id: '',
            monthly_income: '',
            monthly_expenses: '',
            employment_status: true,
            previous_credit_history: true,
            requested_loan_amount: '',
            collateral_estimate: '',
            loan_term: 0,
        },
        resolver: zodResolver(createLoanReferenceFormSchema),
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
                <div>
                    <FormField
                        control={form.control}
                        name="monthly_income"
                        render={({ field: { onChange, value, ...field } }) => (
                            <FormItem>
                                <FormLabel>Pendapatan Bulanan</FormLabel>
                                <FormControl>
                                    <Input
                                        onChange={e => {
                                            const numericValue =
                                                e.target.value.replace(
                                                    /\D/g,
                                                    '',
                                                );
                                            inputHandle.onChange.number(e);
                                            onChange(numericValue);
                                        }}
                                        value={value ? toIDR(value) : ''}
                                        onPaste={inputHandle.onPaste.number}
                                        placeholder="Rp. 0"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="monthly_expenses"
                        render={({ field: { onChange, value, ...field } }) => (
                            <FormItem>
                                <FormLabel>Pengeluaran Bulanan</FormLabel>
                                <FormControl>
                                    <Input
                                        onChange={e => {
                                            const numericValue =
                                                e.target.value.replace(
                                                    /\D/g,
                                                    '',
                                                );
                                            inputHandle.onChange.number(e);
                                            onChange(numericValue);
                                        }}
                                        value={value ? toIDR(value) : ''}
                                        onPaste={inputHandle.onPaste.number}
                                        placeholder="Rp. 0"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="employment_status"
                        render={({ field: { onChange, value } }) => (
                            <FormItem>
                                <FormLabel>Status Pekerjaan</FormLabel>
                                <Select
                                    onValueChange={value =>
                                        onChange(value === 'true')
                                    }
                                    value={value.toString()}
                                >
                                    <FormControl>
                                        <SelectTrigger className="capitalize">
                                            <SelectValue placeholder="Pilih status" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem
                                            value="true"
                                            className="capitalize"
                                        >
                                            Tetap
                                        </SelectItem>
                                        <SelectItem
                                            value="false"
                                            className="capitalize"
                                        >
                                            Tidak Tetap
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="previous_credit_history"
                        render={({ field: { onChange, value } }) => (
                            <FormItem>
                                <FormLabel>Riwayat Kredit Sebelumnya</FormLabel>
                                <Select
                                    onValueChange={value =>
                                        onChange(value === 'true')
                                    }
                                    value={value.toString()}
                                >
                                    <FormControl>
                                        <SelectTrigger className="capitalize">
                                            <SelectValue placeholder="Pilih riwayat" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem
                                            value="true"
                                            className="capitalize"
                                        >
                                            Baik
                                        </SelectItem>
                                        <SelectItem
                                            value="false"
                                            className="capitalize"
                                        >
                                            Buruk
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="collateral_estimate"
                        render={({ field: { onChange, value, ...field } }) => (
                            <FormItem>
                                <FormLabel>Taksiran Total Jaminan</FormLabel>
                                <FormControl>
                                    <Input
                                        onChange={e => {
                                            inputHandle.onChange.number(e);
                                            onChange(
                                                inputParse.stringAsNumber(
                                                    e.target.value,
                                                ),
                                            );
                                        }}
                                        value={value ? toIDR(value) : ''}
                                        onPaste={inputHandle.onPaste.number}
                                        placeholder="Rp. 0"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="requested_loan_amount"
                        render={({ field: { onChange, value, ...field } }) => (
                            <FormItem>
                                <FormLabel>Pinjaman Yang di Ajukan</FormLabel>
                                <FormControl>
                                    <Input
                                        onChange={e => {
                                            inputHandle.onChange.number(e);
                                            onChange(
                                                inputParse.stringAsNumber(
                                                    e.target.value,
                                                ),
                                            );
                                        }}
                                        value={value ? toIDR(value) : ''}
                                        onPaste={inputHandle.onPaste.number}
                                        placeholder="Rp. 0"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="loan_term"
                        render={({ field: { onChange, ...field } }) => (
                            <FormItem>
                                <FormLabel>Jangka Waktu Pinjaman</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            placeholder="Masukkan jangka waktu pinjaman"
                                            onChange={e => {
                                                inputHandle.onChange.number(e);
                                                onChange(
                                                    inputParse.stringToNumber(
                                                        e.target.value,
                                                    ),
                                                );
                                            }}
                                            onPaste={inputHandle.onPaste.number}
                                            {...field}
                                        />
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                            bulan
                                        </span>
                                    </div>
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
