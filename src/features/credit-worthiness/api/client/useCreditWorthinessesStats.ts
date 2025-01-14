import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse, StatsResponse } from '~/types/api';

export const useCreditWorthinessesStats = () => {
    return useQuery({
        queryKey: ['credit-worthinesses', 'stats'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<StatsResponse>>(
                '/credit-worthinesses/stats',
            );
            return response.data.data;
        },
    });
};
