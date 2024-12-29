import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { GuarantorWithRelations } from '../../types';

export const getGuarantorById = async (id?: string) => {
    try {
        const response = await axiosAuth.get<
            ApiResponse<GuarantorWithRelations>
        >(`/guarantors/${id}`);
        return response.data.data;
    } catch (error) {
        console.log(`🚀 - getGuarantorById : `, error);
        throw new Error('Failed to fetch guarantor');
    }
};
