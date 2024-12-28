import { useMutation } from '@tanstack/react-query';
import type { CreateCustomerFormSchema } from '../../types';
import { axiosAuth } from '~/lib/axios';
import type { ApiProps, ApiResponse } from '~/types/api';
import { type Customer } from '@prisma/client';

export const useCreateCustomer = ({
    onMutate,
    onError,
    onSuccess,
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
        onError,
        onSuccess,
    });
};
