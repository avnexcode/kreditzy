import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import { ApiResponse } from '~/types/api';
import { TransactionWithRelations } from '../../types';

export const useTransactions = () => {
    return useQuery({
        queryKey: ['transactions'],
        queryFn: async () => {
            const response =
                await axiosAuth.get<ApiResponse<TransactionWithRelations[]>>(
                    '/transactions',
                );
            return response.data.data;
        },
    });
};
