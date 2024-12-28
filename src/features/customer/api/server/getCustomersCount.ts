import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const getCustomersCount = async () => {
    try {
        const response = await axiosAuth.get<ApiResponse<number>>(
            '/customers/stats/length',
        );
        return response.data.data;
    } catch (error) {
        console.log(`🚀 - getCustomersCount : `, error);
        throw new Error('Failed to fetch customers count');
    }
};
