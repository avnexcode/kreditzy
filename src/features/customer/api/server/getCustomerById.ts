import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { CustomerWithRelations } from '../../types';

export const getCustomerById = async (id?: string) => {
    try {
        if (!id) throw new Error('Id is required');
        const response = await axiosAuth.get<
            ApiResponse<CustomerWithRelations>
        >(`/customers/${id}`);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
};
