import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const getGuarantorsCount = async () => {
    try {
        const response = await axiosAuth.get<ApiResponse<number>>(
            '/guarantors/stats/length',
        );
        return response.data.data;
    } catch (error) {
        throw error;
    }
};
