import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse, StatsResponse } from '~/types/api';

export const useLoanReferencesStats = () => {
    return useQuery({
        queryKey: ['loan-references', 'stats'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<StatsResponse>>(
                '/loan-references/stats',
            );
            return response.data.data;
        },
    });
};
