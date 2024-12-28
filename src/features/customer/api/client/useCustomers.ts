import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { CustomerWithRelations } from '../../types';

export const useCustomers = () => {
    return useQuery({
        queryKey: ['customers'],
        queryFn: async () => {
            const response =
                await axiosAuth.get<ApiResponse<CustomerWithRelations[]>>(
                    '/customers',
                );
            return response.data.data;
        },
    });
};
