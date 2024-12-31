import { useMutation } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { SafeUserResponse, UpdateProfileFormSchema } from '../../types';
import type { ApiProps, ApiResponse } from '~/types/api';

export const useUpdateProfile = ({
    id,
    onMutate,
    onSuccess,
    onError,
}: ApiProps) => {
    return useMutation({
        mutationKey: ['profile'],
        mutationFn: async (values: UpdateProfileFormSchema) => {
            const response = await axiosAuth.patch<
                ApiResponse<SafeUserResponse>
            >(`/users/${id}`, values);
            return response.data.data;
        },
        onMutate,
        onSuccess,
        onError,
    });
};
