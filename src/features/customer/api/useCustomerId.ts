import { type Customer } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const useCustomerId = (id?: string) => {
    return useQuery({
        queryKey: ['customers', id],
        queryFn: async () => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.get<ApiResponse<Customer>>(
                `/customers/${id}`,
            );
            return response.data.data;
        },
    });
};
