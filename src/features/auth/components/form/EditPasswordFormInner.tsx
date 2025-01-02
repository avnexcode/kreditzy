import { useForm } from 'react-hook-form';
import { Input } from '~/components/ui/input';
import { ValidatedPasswordList } from '~/features/auth/components/validation/ValidatedPasswordList';
import { VisiblePasswordButton } from '~/features/auth/components/button/VisiblePasswordButton';
import { useState } from 'react';
import { updatePasswordSchema, type UpdatePasswordSchema } from '../../types';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';

type EditPasswordFormInnerProps = {
    form_id: string;
    onSubmit: (values: UpdatePasswordSchema) => void;
};
export const EditPasswordFormInner = (props: EditPasswordFormInnerProps) => {
    const { form_id, onSubmit } = props;
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
    const [visibleNewPassword, setVisibleNewPassword] =
        useState<boolean>(false);

    const form = useForm<UpdatePasswordSchema>({
        defaultValues: {
            password: '',
            new_password: '',
            confirm_password: '',
        },
        resolver: zodResolver(updatePasswordSchema),
    });

    const passwordValidation = {
        lowercase: /(?=.*[a-z])/.test(form.watch('new_password')),
        uppercase: /(?=.*[A-Z])/.test(form.watch('new_password')),
        number: /(?=.*\d)/.test(form.watch('new_password')),
        symbol: /(?=.*[@$!%*?&])/.test(form.watch('new_password')),
        minLength: form.watch('new_password').length >= 8,
    };

    const validationRules = [
        { label: 'Uppercase letter', isValid: passwordValidation.uppercase },
        { label: 'Lowercase letter', isValid: passwordValidation.lowercase },
        {
            label: 'Number and symbol',
            isValid: passwordValidation.number && passwordValidation.symbol,
        },
        {
            label: 'At least 8 characters',
            isValid: passwordValidation.minLength,
        },
    ];
    return (
        <Form {...form}>
            <form
                id={form_id}
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5 w-full"
            >
                <div>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type={
                                            visiblePassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        placeholder="Password"
                                        {...field}
                                    />
                                </FormControl>
                                <VisiblePasswordButton
                                    visiblePassword={visiblePassword}
                                    setVisiblePassword={setVisiblePassword}
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="new_password"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type={
                                            visibleNewPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        placeholder="New Password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                <VisiblePasswordButton
                                    visiblePassword={visibleNewPassword}
                                    setVisiblePassword={setVisibleNewPassword}
                                />
                                <div className="grid items-center justify-center py-5">
                                    <ValidatedPasswordList
                                        validationRules={validationRules}
                                        columns={4}
                                        className="flex gap-14"
                                    />
                                </div>
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={form.control}
                        name="confirm_password"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormLabel>New Password Confirm</FormLabel>
                                <FormControl>
                                    <Input
                                        type={
                                            visibleNewPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        placeholder="New Password Confirm"
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
