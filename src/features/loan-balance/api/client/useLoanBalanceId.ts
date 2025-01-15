import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import { ApiResponse } from '~/types/api';
import { LoanBalanceWithRelations } from '../../types';

export const useLoanBalanceId = (id?: string) => {
    return useQuery({
        queryKey: ['loan-balances', id],
        queryFn: async () => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.get<
                ApiResponse<LoanBalanceWithRelations>
            >(`/loan-balances/${id}`);
            return response.data.data;
        },
    });
};
