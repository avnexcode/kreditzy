import { type Guarantor } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiProps, ApiResponse } from '~/types/api';
import { type CreateGuarantorFormSchema } from '../../types';

export const useCreateGuarantor = ({
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['guarantors'],
        mutationFn: async (values: CreateGuarantorFormSchema) => {
            const response = await axiosAuth.post<ApiResponse<Guarantor>>(
                '/guarantors',
                values,
            );
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
