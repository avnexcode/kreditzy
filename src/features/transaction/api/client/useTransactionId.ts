import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import { ApiResponse } from '~/types/api';
import { TransactionWithRelations } from '../../types';

export const useTransactionId = (id?: string) => {
    return useQuery({
        queryKey: ['transactions', id],
        queryFn: async () => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.get<
                ApiResponse<TransactionWithRelations>
            >(`/transactions/${id}`);
            return response.data.data;
        },
    });
};
