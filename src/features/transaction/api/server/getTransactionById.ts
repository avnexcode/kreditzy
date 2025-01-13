import { axiosAuth } from '~/lib/axios';
import { ApiResponse } from '~/types/api';
import { TransactionWithRelations } from '../../types';

export const getTransactionById = async (id?: string) => {
    try {
        if (!id) throw new Error('Id is required');
        const response = await axiosAuth.get<
            ApiResponse<TransactionWithRelations>
        >(`/transactions/${id}`);
        return response.data.data;
    } catch (error) {
        throw error;
    }
};
