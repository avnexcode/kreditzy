import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiProps, ApiResponse } from '~/types/api';

export const useDeleteCustomer = ({
    id,
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['customers', id],
        mutationFn: async () => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.delete<
                ApiResponse<{ id: string }>
            >(`/customers/${id}`);
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
