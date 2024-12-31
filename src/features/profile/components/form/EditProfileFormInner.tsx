import { useForm } from 'react-hook-form';
import {
    updateProfileFormSchema,
    type UpdateProfileFormSchema,
} from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import { inputHandle } from '~/utils/form-input';
import { Input } from '~/components/ui/input';
import { useUserId } from '~/features/user/api/client/useUserId';
import { useEffect } from 'react';

type EditProfileFormInnerProps = {
    userId: string;
    form_id: string;
    onSubmit: (values: UpdateProfileFormSchema) => void;
};

export const EditProfileFormInner = ({
    userId,
    form_id,
    onSubmit,
}: EditProfileFormInnerProps) => {
    const { data: user } = useUserId(userId);

    const form = useForm<UpdateProfileFormSchema>({
        defaultValues: {
            username: '',
            email: '',
            name: '',
            phone: '',
        },
        resolver: zodResolver(updateProfileFormSchema),
    });

    useEffect(() => {
        if (user) {
            form.reset({
                username: user.username,
                name: user.name,
                email: user.email,
                phone: user.phone ?? '',
            });
        }
    }, [form, user]);

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
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Masukkan username disini"
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
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
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
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Masukkan email disini"
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
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
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
