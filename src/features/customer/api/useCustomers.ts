import { type Customer } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const useCustomers = () => {
    return useQuery({
        queryKey: ['customers'],
        queryFn: async () => {
            const response =
                await axiosAuth.get<ApiResponse<Customer[]>>('/customers');
            return response.data.data;
        },
    });
};
