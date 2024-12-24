import { useMutation } from '@tanstack/react-query';
import { type RegisterFormSchema } from '../types';
import type { ApiProps, ApiResponse } from '~/types/api';
import type { SafeUserResponse } from '~/features/user/types';
import { axiosInstance } from '~/lib/axios';

export const useRegister = ({ onMutate, onSuccess, onError }: ApiProps) => {
    return useMutation({
        mutationKey: ['register'],
        mutationFn: async (values: RegisterFormSchema) => {
            const response = await axiosInstance.post<
                ApiResponse<SafeUserResponse>
            >('/auth/register', values);
            return response.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
