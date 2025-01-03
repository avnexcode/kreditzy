import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { LoanReferenceWithRelations } from '../../types';

export const getLoanReferenceById = async (id?: string) => {
    try {
        const response = await axiosAuth.get<
            ApiResponse<LoanReferenceWithRelations>
        >(`/loan-references/${id}`);
        return response.data.data;
    } catch (error) {
        throw error;
    }
};
