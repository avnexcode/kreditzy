import { useMutation } from '@tanstack/react-query';
import type { ApiProps } from '~/types/api';
import type { LoginFormSchema } from '../types';
import { AxiosError } from 'axios';
import { signIn } from 'next-auth/react';

export const useLogin = ({ onMutate, onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['login'],
        mutationFn: async (
            values: LoginFormSchema & { callbackUrl?: string },
        ) => {
            const response = await signIn('credentials', {
                redirect: false,
                ...values,
            });

            if (response?.error) {
                throw new AxiosError('Invalid email or password');
            }

            return response;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
