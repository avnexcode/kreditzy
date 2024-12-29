import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import {
    updateGuarantorFormSchema,
    type UpdateGuarantorFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Input } from '~/components/ui/input';
import { inputHandle } from '~/utils/form-input';
import { SelectCustomer } from '~/features/customer/components/select/SelectCustomer';
import { useGuarantorId } from '../../api/client';

type EditGuarantorFormInnerProps = {
    guarantorId: string;
    form_id: string;
    onSubmit: (values: UpdateGuarantorFormSchema) => void;
};

export const EditGuarantorFormInner = ({
    guarantorId,
    form_id,
    onSubmit,
}: EditGuarantorFormInnerProps) => {
    const { data: guarantor } = useGuarantorId(guarantorId);

    const form = useForm<UpdateGuarantorFormSchema>({
        defaultValues: {
            name: '',
            national_id: '',
            id_card_address: '',
            residential_address: '',
            occupation: '',
            phone: '',
            customer_id: '',
        },
        resolver: zodResolver(updateGuarantorFormSchema),
    });

    useEffect(() => {
        if (guarantor) {
            form.reset({
                name: guarantor.name,
                national_id: guarantor.national_id,
                id_card_address: guarantor.id_card_address,
                residential_address: guarantor.residential_address,
                occupation: guarantor.occupation,
                phone: guarantor.phone,
                relationship: guarantor.relationship,
                customer_id: guarantor.customer_id,
            });
        }
    }, [form, guarantor]);

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
                <div>
                    <FormField
                        control={form.control}
                        name="relationship"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hubungan Keluarga</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Masukkan hubungan keluarga disini"
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
