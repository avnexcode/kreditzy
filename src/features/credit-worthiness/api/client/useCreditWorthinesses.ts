import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { CreditWorthinessWithRelations } from '../../types';

export const useCreditWorthinesses = () => {
    return useQuery({
        queryKey: ['credit-worthinesses'],
        queryFn: async () => {
            const response = await axiosAuth.get<
                ApiResponse<CreditWorthinessWithRelations[]>
            >('/credit-worthinesses');

            return response.data.data;
        },
    });
};
