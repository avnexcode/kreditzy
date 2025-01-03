import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { LoanReferenceWithRelations } from '../../types';

export const getLoanReferences = async () => {
    try {
        const response =
            await axiosAuth.get<ApiResponse<LoanReferenceWithRelations[]>>(
                '/loan-references',
            );
        return response.data.data;
    } catch (error) {
        throw error;
    }
};
