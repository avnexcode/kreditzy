import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { CustomerWithRelations } from '../../types';

export const getCustomers = async () => {
    try {
        const response =
            await axiosAuth.get<ApiResponse<CustomerWithRelations[]>>(
                `/customers`,
            );
        return response.data.data;
    } catch (error) {
        throw error;
    }
};
