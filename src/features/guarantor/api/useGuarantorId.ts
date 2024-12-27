import { type Guarantor } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';

export const useGuarantorId = (id?: string) => {
    return useQuery({
        queryKey: ['guarantors', id],
        queryFn: async () => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.get<ApiResponse<Guarantor>>(
                `/guarantors/${id}`,
            );
            return response.data.data;
        },
    });
};
