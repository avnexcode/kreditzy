import { useMutation } from '@tanstack/react-query';
import type { UpdateLoanReferenceFormSchema } from '../types';
import { axiosAuth } from '~/lib/axios';
import type { ApiProps, ApiResponse } from '~/types/api';
import { type LoanReference } from '@prisma/client';

export const useUpdateLoanReference = ({
    id,
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['loan-references', id],
        mutationFn: async (values: UpdateLoanReferenceFormSchema) => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.put<ApiResponse<LoanReference>>(
                `/loan-references/${id}`,
                values,
            );
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
