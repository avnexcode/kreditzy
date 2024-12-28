import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { LoanReferenceWithRelations } from '../../types';

export const useLoanReferences = () => {
    return useQuery({
        queryKey: ['loan-references'],
        queryFn: async () => {
            const response =
                await axiosAuth.get<ApiResponse<LoanReferenceWithRelations[]>>(
                    '/loan-references',
                );
            return response.data.data;
        },
    });
};
