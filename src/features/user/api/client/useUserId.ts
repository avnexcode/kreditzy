import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { SafeUserResponse } from '../../types';

export const useUserId = (id?: string) => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            if (!id) throw Error('Id is required');
            const response = await axiosAuth.get<ApiResponse<SafeUserResponse>>(
                `/users/${id}`,
            );
            return response.data.data;
        },
    });
};
