import { useQuery } from '@tanstack/react-query';
import type { ApiSuccessResponse } from '~/types/api';
import type { SafeUserResponse } from '../types';
import { axiosAuth } from '~/lib/axios';

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response =
                await axiosAuth.get<ApiSuccessResponse<SafeUserResponse[]>>(
                    '/users',
                );
            return response.data.data;
        },
    });
};
