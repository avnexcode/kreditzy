import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import { ApiResponse } from '~/types/api';

export const useTransactionsCount = () => {
    return useQuery({
        queryKey: ['transactions', 'count'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<number>>(
                '/transactions/stats/length',
            );
            return response.data.data;
        },
    });
};
