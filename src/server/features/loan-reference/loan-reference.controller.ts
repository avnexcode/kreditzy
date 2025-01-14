import { type LoanReference } from '@prisma/client';
import type { NextResponse, NextRequest } from 'next/server';
import { ErrorFilter } from '~/server/filter/error.filter';
import type { IApiResponse } from '~/server/interfaces/Api';
import { ApiResponse } from '~/server/helper/api.response';
import {
    createMessageDeleteSuccess,
    createMessageGetLengthSuccess,
    createMessageGetStatsSuccess,
    createMessageGetSuccess,
    createMessageGetUniqueSuccess,
    createMessagePatchSuccess,
    createMessagePostSuccess,
    createMessagePutSuccess,
} from '~/server/helper/message.response';
import type {
    CreateLoanReferenceRequest,
    LoanReferenceWithRelationsResponse,
    UpdateLoanReferenceRequest,
} from './loan-reference.model';
import { loanReferenceService } from './loan-reference.service';
import { BadRequestException } from '~/server/helper/error.exception';
import { StatsResponse } from '~/server/types/api';

export const loanReferenceController = {
    GET: async (): Promise<
        NextResponse<IApiResponse<LoanReferenceWithRelationsResponse[]>>
    > => {
        try {
            const data = await loanReferenceService.getAll();
            return ApiResponse.success(
                data,
                createMessageGetSuccess('Loan references'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<
        NextResponse<IApiResponse<LoanReferenceWithRelationsResponse>>
    > => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await loanReferenceService.getById(id);
            return ApiResponse.success(
                data,
                createMessageGetUniqueSuccess('Loan reference', `id : ${id}`),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    GET_STATS: async (): Promise<NextResponse<IApiResponse<StatsResponse>>> => {
        try {
            const data = await loanReferenceService.getStats();
            return ApiResponse.success(
                data,
                createMessageGetStatsSuccess('Loan references'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<IApiResponse<LoanReference>>> => {
        try {
            const requestBody =
                (await request.json()) as CreateLoanReferenceRequest;
            const data = await loanReferenceService.create(requestBody);
            return ApiResponse.success(
                data,
                createMessagePostSuccess('Loan reference'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    POST_MANY: async (
        request: NextRequest,
    ): Promise<NextResponse<IApiResponse<number>>> => {
        try {
            const requestBody =
                (await request.json()) as CreateLoanReferenceRequest[];
            const data = await loanReferenceService.createMany(requestBody);
            return ApiResponse.success(
                data,
                createMessagePostSuccess('Loan reference'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PUT: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<LoanReference>>> => {
        try {
            const requestBody =
                (await request.json()) as UpdateLoanReferenceRequest;

            if (
                !(
                    requestBody.monthly_income &&
                    requestBody.monthly_expenses &&
                    requestBody.requested_loan_amount &&
                    requestBody.collateral_estimate &&
                    requestBody.loan_term &&
                    requestBody.customer_id
                ) &&
                requestBody.employment_status === undefined &&
                requestBody.previous_credit_history === undefined
            ) {
                throw new BadRequestException('Required fields are missing');
            }

            const params = await context.params;
            const id = params?.id;
            const data = await loanReferenceService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePutSuccess('Loan reference'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PATCH: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<LoanReference>>> => {
        try {
            const requestBody =
                (await request.json()) as UpdateLoanReferenceRequest;
            const params = await context.params;
            const id = params?.id;
            const data = await loanReferenceService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePatchSuccess('Loan reference'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    DELETE: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<{ id: string }>>> => {
        try {
            const params = await context.params;
            const id = params.id;
            const data = await loanReferenceService.delete(id);
            return ApiResponse.success(
                data,
                createMessageDeleteSuccess('Loan references'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
