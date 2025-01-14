import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse, StatsResponse } from '~/types/api';

export const useGuarantorsStats = () => {
    return useQuery({
        queryKey: ['guarantors', 'stats'],
        queryFn: async () => {
            const response =
                await axiosAuth.get<ApiResponse<StatsResponse>>(
                    '/guarantors/stats',
                );
            return response.data.data;
        },
    });
};
