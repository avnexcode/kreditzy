'use client';
import { useToast } from '~/hooks/use-toast';
import { useRegister } from '../../api';
import { type RegisterFormSchema } from '../../types';
import { RegisterFormLayout } from '../layout/RegisterFormLayout';
import { RegisterFormInner } from './RegisterFormInner';
import { useRouter } from 'next/navigation';

export const RegisterForm = () => {
    const { toast } = useToast();
    const router = useRouter();

    const { mutate: register, isPending: isRegisterPending } = useRegister({
        onSuccess: async () => {
            toast({
                title: 'Success',
                description: 'Register user successfully',
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

    const onSubmit = (values: RegisterFormSchema) => register(values);

    return (
        <RegisterFormLayout
            form_id="register-form"
            isPending={isRegisterPending}
        >
            <RegisterFormInner form_id="register-form" onSubmit={onSubmit} />
        </RegisterFormLayout>
    );
};
