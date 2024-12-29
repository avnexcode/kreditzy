import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { GuarantorWithRelations } from '../../types';

export const getGuarantors = async () => {
    try {
        const response =
            await axiosAuth.get<ApiResponse<GuarantorWithRelations[]>>(
                '/guarantors',
            );
        return response.data.data;
    } catch (error) {
        console.log(`🚀 - getGuarantors : `, error);
        throw new Error('Failed to fetch guarantors data');
    }
};