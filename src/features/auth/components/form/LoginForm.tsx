'use client';
import { useToast } from '~/hooks/use-toast';
import { useLogin } from '../../api/client';
import { type LoginFormSchema } from '../../types';
import { LoginFormLayout } from '../layout/LoginFormLayout';
import { LoginFormInner } from './LoginFormInner';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
    const { toast } = useToast();
    const router = useRouter();
    const { mutate: login, isPending: isLoginPending } = useLogin({
        onSuccess: async () => {
            toast({
                title: 'Success',
                description: 'Login successfully',
            });
            router.push('/dashboard');
        },
        onError: async error => {
            toast({
                title: 'Error',
                variant: 'destructive',
                description:
                    error.response?.data.error ??
                    error.message ??
                    'Invalid credentials',
            });
        },
    });

    const onSubmit = (values: LoginFormSchema) => login(values);

    return (
        <LoginFormLayout form_id="login-form" isPending={isLoginPending}>
            <LoginFormInner form_id="login-form" onSubmit={onSubmit} />
        </LoginFormLayout>
    );
};
