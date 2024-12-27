import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { CreateLoanReferenceFormSchema } from '../types';
import type { ApiProps, ApiResponse } from '~/types/api';
import { type LoanReference } from '@prisma/client';

export const useCreateLoanReference = ({
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['loan-references'],
        mutationFn: async (values: CreateLoanReferenceFormSchema) => {
            const response = await axiosAuth.post<ApiResponse<LoanReference>>(
                `/loan-references`,
                values,
            );
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
