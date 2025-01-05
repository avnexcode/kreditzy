import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const useGuarantorsCount = () => {
    return useQuery({
        queryKey: ['guarantors', 'count'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<number>>(
                '/guarantors/stats/length',
            );
            return response.data.data;
        },
    });
};
