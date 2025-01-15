import { type LoanBalance } from '@prisma/client';
import type { NextResponse, NextRequest } from 'next/server';
import { ErrorFilter } from '~/server/filter/error.filter';
import type { IApiResponse } from '~/server/interfaces/Api';
import { ApiResponse } from '~/server/helper/api.response';
import {
    createMessageDeleteSuccess,
    createMessageGetStatsSuccess,
    createMessageGetSuccess,
    createMessageGetUniqueSuccess,
    createMessagePatchSuccess,
    createMessagePostSuccess,
    createMessagePutSuccess,
} from '~/server/helper/message.response';
import type {
    CreateLoanBalanceRequest,
    LoanBalanceWithRelationsResponse,
    UpdateLoanBalanceRequest,
} from './loan-balance.model';
import { loanBalanceService } from './loan-balance.service';
import { BadRequestException } from '~/server/helper/error.exception';
import { StatsResponse } from '~/server/types/api';

export const loanBalanceController = {
    GET: async (): Promise<
        NextResponse<IApiResponse<LoanBalanceWithRelationsResponse[]>>
    > => {
        try {
            const data = await loanBalanceService.getAll();
            return ApiResponse.success(
                data,
                createMessageGetSuccess('Loan balances'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<
        NextResponse<IApiResponse<LoanBalanceWithRelationsResponse>>
    > => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await loanBalanceService.getById(id);
            return ApiResponse.success(
                data,
                createMessageGetUniqueSuccess('Loan balance', `id : ${id}`),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    GET_STATS: async (): Promise<NextResponse<IApiResponse<StatsResponse>>> => {
        try {
            const data = await loanBalanceService.getStats();
            return ApiResponse.success(
                data,
                createMessageGetStatsSuccess('Loan balances'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<IApiResponse<LoanBalance>>> => {
        try {
            const requestBody =
                (await request.json()) as CreateLoanBalanceRequest;
            const data = await loanBalanceService.create(requestBody);
            return ApiResponse.success(
                data,
                createMessagePostSuccess('Loan balance'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PUT: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<LoanBalance>>> => {
        try {
            const requestBody =
                (await request.json()) as UpdateLoanBalanceRequest;

            if (!requestBody.interest_due) {
                throw new BadRequestException('Required fields are missing');
            }

            const params = await context.params;
            const id = params?.id;
            const data = await loanBalanceService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePutSuccess('Loan balance'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PATCH: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<LoanBalance>>> => {
        try {
            const requestBody =
                (await request.json()) as UpdateLoanBalanceRequest;
            const params = await context.params;
            const id = params?.id;
            const data = await loanBalanceService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePatchSuccess('Loan balance'),
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
            const data = await loanBalanceService.delete(id);
            return ApiResponse.success(
                data,
                createMessageDeleteSuccess('Loan balances'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
