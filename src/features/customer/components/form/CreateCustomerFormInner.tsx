import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import {
    type CreateCustomerFormSchema,
    createCustomerFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '~/components/ui/input';
import { inputHandle } from '~/utils/form-input';

type CreateCustomerFormInnerProps = {
    form_id: string;
    onSubmit: (values: CreateCustomerFormSchema) => void;
};

export const CreateCustomerFormInner = ({
    form_id,
    onSubmit,
}: CreateCustomerFormInnerProps) => {
    const form = useForm<CreateCustomerFormSchema>({
        defaultValues: {
            name: '',
            national_id: '',
            id_card_address: '',
            residential_address: '',
            occupation: '',
            phone: '',
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
                                <FormLabel>Nama</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan nama disini"
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
                        name="national_id"
                        render={({ field: { onChange, ...field } }) => (
                            <FormItem>
                                <FormLabel>
                                    Nomor Induk Kewarganegaraan
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan NIK disini"
                                        onChange={e => {
                                            inputHandle.onChange.number(e);
                                            onChange(e);
                                        }}
                                        onPaste={inputHandle.onPaste.number}
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
                        name="id_card_address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Alamat berdasarkan KTP</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan alamat disini"
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
                        name="residential_address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Alamat tempat tinggal</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan alamat disini"
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
                        name="occupation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pekerjaan</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan pekerjaan disini"
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
                        name="phone"
                        render={({ field: { onChange, ...field } }) => (
                            <FormItem>
                                <FormLabel>Nomor HP</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan nomor hp disini"
                                        onChange={e => {
                                            inputHandle.onChange.number(e);
                                            onChange(e);
                                        }}
                                        onPaste={inputHandle.onPaste.number}
                                        {...field}
                                    />
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
