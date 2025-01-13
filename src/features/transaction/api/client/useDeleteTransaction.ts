import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import { ApiProps, ApiResponse } from '~/types/api';

export const useDeleteTransaction = ({
    id,
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['transactions', id],
        mutationFn: async () => {
            const response = await axiosAuth.delete<
                ApiResponse<{ id: string }>
            >(`/transactions/${id}`);
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
