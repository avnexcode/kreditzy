import { useQuery } from '@tanstack/react-query';
import { axiosAuth } from '~/lib/axios';
import type { ApiResponse } from '~/types/api';
import type { LoanReferenceWithRelations } from '../types';

export const useLoanReferenceId = (id?: string) => {
    return useQuery({
        queryKey: ['loan-references', id],
        queryFn: async () => {
            if (!id) throw new Error('Id is required');
            const response = await axiosAuth.get<
                ApiResponse<LoanReferenceWithRelations>
            >(`/loan-references/${id}`);
            return response.data.data;
        },
    });
};
