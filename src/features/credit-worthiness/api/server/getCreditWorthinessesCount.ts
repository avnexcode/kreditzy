import { axiosAuth } from '~/lib/axios/server';
import type { ApiResponse } from '~/types/api';

export const getCreditWorthinessesCount = async () => {
    try {
        const response = await axiosAuth.get<ApiResponse<number>>(
            '/credit-worthinesses/stats/length',
        );
        return response.data.data;
    } catch (error) {
        throw error;
    }
};
