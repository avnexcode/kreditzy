import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiProps, ApiResponse } from '~/types/api';

export const useDeleteCustomer = ({
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['customers'],
        mutationFn: async (id?: string) => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.delete<ApiResponse<number>>(
                `/customers/${id}`,
            );
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
