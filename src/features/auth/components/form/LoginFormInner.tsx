import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema, type LoginFormSchema } from '../../types';
import { useState } from 'react';
import { VisiblePasswordButton } from '../button/VisiblePasswordButton';

type LoginFormInnerProps = {
    form_id: string;
    onSubmit: (values: LoginFormSchema) => void;
};

export const LoginFormInner = ({ form_id, onSubmit }: LoginFormInnerProps) => {
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

    const form = useForm<LoginFormSchema>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(loginFormSchema),
    });

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
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
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
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    );
};
