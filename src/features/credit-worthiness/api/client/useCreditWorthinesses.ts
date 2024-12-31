import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import { CreditWorthinessWithRelations } from '~/server/features/credit-worthiness/credit-worthiness.model';
import { ApiResponse } from '~/types/api';

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
