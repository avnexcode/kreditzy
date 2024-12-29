import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const getGuarantorsCount = async () => {
    try {
        const response = await axiosAuth.get<ApiResponse<number>>(
            '/guarantors/stats/length',
        );
        return response.data.data;
    } catch (error) {
        console.log(`🚀 - getGuarantorsCount : `, error);
        throw new Error('Failed to fetch guarantors count');
    }
};
