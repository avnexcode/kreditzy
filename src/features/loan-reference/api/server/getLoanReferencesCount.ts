import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const getLoanReferencesCount = async () => {
    try {
        const response = await axiosAuth.get<ApiResponse<number>>(
            '/loan-references/stats/length',
        );
        return response.data.data;
    } catch (error) {
        throw error;
    }
};
