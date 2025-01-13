import { useMutation } from '@tanstack/react-query';
import { CreateTransactionFormSchema } from '../../types';
import { axiosAuth } from '~/lib/axios';
import { ApiProps } from '~/types/api';

export const useCreateTransaction = ({
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['transactions'],
        mutationFn: async (values: CreateTransactionFormSchema) => {
            const response = await axiosAuth.post('/transactions', values);
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
