import { useMutation } from '@tanstack/react-query';
import { CreateCustomerFormSchema } from '../types';
import { axiosAuth } from '~/lib/axios';
import { ApiProps, ApiResponse } from '~/types/api';
import { Customer } from '@prisma/client';

export const useCreateCustomer = ({
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['customers'],
        mutationFn: async (values: CreateCustomerFormSchema) => {
            const response = await axiosAuth.post<ApiResponse<Customer>>(
                '/customers',
                values,
            );
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
