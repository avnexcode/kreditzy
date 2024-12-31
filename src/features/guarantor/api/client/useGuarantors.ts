import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { GuarantorWithRelations } from '../../types';

export const useGuarantors = () => {
    return useQuery({
        queryKey: ['guarantors'],
        queryFn: async () => {
            const response =
                await axiosAuth.get<ApiResponse<GuarantorWithRelations[]>>(
                    '/guarantors',
                );
            return response.data.data;
        },
    });
};
