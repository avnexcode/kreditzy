import { type Guarantor } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const useGuarantors = () => {
    return useQuery({
        queryKey: ['guarantors'],
        queryFn: async () => {
            const response =
                await axiosAuth.get<ApiResponse<Guarantor[]>>('/guarantors');
            return response.data.data;
        },
    });
};
