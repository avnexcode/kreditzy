import { axiosAuth } from '~/lib/axios';
import { ApiResponse } from '~/types/api';
import { LoanBalanceWithRelations } from '../../types';

export const getLoanBalanceById = async (id?: string) => {
    try {
        if (!id) throw new Error('Id is required');
        const response = await axiosAuth.get<
            ApiResponse<LoanBalanceWithRelations>
        >(`/loan-balances/${id}`);
        return response.data.data;
    } catch (error) {
        throw error;
    }
};
