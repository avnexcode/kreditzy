import { useForm } from 'react-hook-form';
import { registerFormSchema, type RegisterFormSchema } from '../../types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { useState } from 'react';
import { VisiblePasswordButton } from '../button/VisiblePasswordButton';
import { ValidatedPasswordList } from '../validation/ValidatedPasswordList';

type RegisterFormInnerProps = {
    form_id: string;
    onSubmit: (values: RegisterFormSchema) => void;
};

export const RegisterFormInner = (props: RegisterFormInnerProps) => {
    const { form_id, onSubmit } = props;

    const form = useForm<RegisterFormSchema>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        resolver: zodResolver(registerFormSchema),
    });

    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

    const passwordValidation = {
        lowercase: /(?=.*[a-z])/.test(form.watch('password')),
        uppercase: /(?=.*[A-Z])/.test(form.watch('password')),
        number: /(?=.*\d)/.test(form.watch('password')),
        symbol: /(?=.*[@$!%*?&])/.test(form.watch('password')),
        minLength: form.watch('password').length >= 8,
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
                className="flex flex-col gap-y-5"
            >
                <div>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Enter your name"
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
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        placeholder="Enter your email address"
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
                                        placeholder="Enter your password"
                                        {...field}
                                    />
                                </FormControl>
                                <VisiblePasswordButton
                                    setVisiblePassword={setVisiblePassword}
                                    visiblePassword={visiblePassword}
                                />
                                <FormMessage />
                                <div className="grid items-center justify-center py-4">
                                    <ValidatedPasswordList
                                        validationRules={validationRules}
                                        columns={2}
                                        className="grid grid-cols-2 gap-28"
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
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type={
                                            visiblePassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        placeholder="Confirm your password"
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
