import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const useCreditWorthinessCount = () => {
    return useQuery({
        queryKey: ['credit-worthiness', 'count'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<number>>(
                '/credit-worthinesses/stats/length',
            );
            return response.data.data;
        },
    });
};
