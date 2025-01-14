import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import { ApiResponse, StatsResponse } from '~/types/api';

export const useCustomersStats = () => {
    return useQuery({
        queryKey: ['customers', 'stats'],
        queryFn: async () => {
            const response =
                await axiosAuth.get<ApiResponse<StatsResponse>>(
                    `/customers/stats`,
                );

            return response.data.data;
        },
    });
};
