import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { UpdatePasswordSchema } from '../../types';
import type { ApiProps, ApiResponse } from '~/types/api';
import type { SafeUserResponse } from '~/features/user/types';

export const useUpdatePassword = ({
    id,
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['reset-password'],
        mutationFn: async (values: UpdatePasswordSchema) => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.patch<
                ApiResponse<SafeUserResponse>
            >(`/users/reset-password/${id}`, values);
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
