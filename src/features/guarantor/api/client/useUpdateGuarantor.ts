import { useMutation } from '@tanstack/react-query';
import type { UpdateGuarantorFormSchema } from '../../types';
import { axiosAuth } from '~/lib/axios';
import type { ApiProps, ApiResponse } from '~/types/api';
import { type Guarantor } from '@prisma/client';

export const useUpdateGuarantor = ({
    id,
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['guarantors'],
        mutationFn: async (values: UpdateGuarantorFormSchema) => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.put<ApiResponse<Guarantor>>(
                `/guarantors/${id}`,
                values,
            );
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
