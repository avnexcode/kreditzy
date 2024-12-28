import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const useLoanReferencesCount = () => {
    return useQuery({
        queryKey: ['loan-references'],
        queryFn: async () => {
            const response = await axiosAuth.get<ApiResponse<number>>(
                '/loan-references/stats/length',
            );
            return response.data.data;
        },
    });
};
