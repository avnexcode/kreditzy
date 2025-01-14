import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse, StatsResponse } from '~/types/api';

export const useTransactionsStats = () => {
    return useQuery({
        queryKey: ['transactions', 'stats'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<StatsResponse>>(
                '/transactions/stats',
            );
            return response.data.data;
        },
    });
};
