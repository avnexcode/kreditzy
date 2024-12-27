import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiProps, ApiResponse } from '~/types/api';

export const useDeleteLoanReference = ({
    id,
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['loan-references', id],
        mutationFn: async () => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.delete<
                ApiResponse<{ id: string }>
            >(`/loan-references/${id}`);
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
