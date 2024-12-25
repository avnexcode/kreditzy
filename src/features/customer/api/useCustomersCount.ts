import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const useCustomersCount = () => {
    return useQuery({
        queryKey: ['customers', 'count'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<number>>(
                '/customers/stats/length',
            );
            return response.data.data;
        },
    });
};
