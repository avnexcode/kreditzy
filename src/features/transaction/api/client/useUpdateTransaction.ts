import { Transaction } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import { ApiProps, ApiResponse } from '~/types/api';
import { UpdateTransactionFormSchema } from '../../types';

export const useUpdateTransaction = ({
    id,
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['transaction', id],
        mutationFn: async (values: UpdateTransactionFormSchema) => {
            const response = await axiosAuth.put<ApiResponse<Transaction>>(
                `/transactions/${id}`,
                values,
            );
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
