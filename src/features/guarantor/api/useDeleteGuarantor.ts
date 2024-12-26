import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiProps, ApiResponse } from '~/types/api';

export const useDeleteGuarantor = ({
    id,
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['guarantors', id],
        mutationFn: async () => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.delete<
                ApiResponse<{ id: string }>
            >(`/guarantors/${id}`);
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
