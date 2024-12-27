import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiProps, ApiResponse } from '~/types/api';
import type { UpdateCustomerFormSchema } from '../types';
import { type Customer } from '@prisma/client';

export const useUpdateCustomer = ({
    id,
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['customers', id],
        mutationFn: async (values: UpdateCustomerFormSchema) => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.put<ApiResponse<Customer>>(
                `/customers/${id}`,
                values,
            );
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
