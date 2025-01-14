import { type Transaction } from '@prisma/client';
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
    CreateTransactionRequest,
    TransactionWithRelationsResponse,
    UpdateTransactionRequest,
} from './transaction.model';
import { transactionService } from './transaction.service';
import { BadRequestException } from '~/server/helper/error.exception';
import { StatsResponse } from '~/server/types/api';

export const transactionController = {
    GET: async (): Promise<
        NextResponse<IApiResponse<TransactionWithRelationsResponse[]>>
    > => {
        try {
            const data = await transactionService.getAll();
            return ApiResponse.success(
                data,
                createMessageGetSuccess('Transactions'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<
        NextResponse<IApiResponse<TransactionWithRelationsResponse>>
    > => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await transactionService.getById(id);
            return ApiResponse.success(
                data,
                createMessageGetUniqueSuccess('Transaction', `id : ${id}`),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    GET_STATS: async (): Promise<NextResponse<IApiResponse<StatsResponse>>> => {
        try {
            const data = await transactionService.getStats();
            return ApiResponse.success(
                data,
                createMessageGetStatsSuccess('Transactions'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<IApiResponse<Transaction>>> => {
        try {
            const requestBody =
                (await request.json()) as CreateTransactionRequest;
            const data = await transactionService.create(requestBody);
            return ApiResponse.success(
                data,
                createMessagePostSuccess('Transaction'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PUT: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<Transaction>>> => {
        try {
            const requestBody =
                (await request.json()) as UpdateTransactionRequest;

            if (!(requestBody.customer_id && requestBody.transaction_status)) {
                throw new BadRequestException('Required fields are missing');
            }

            const params = await context.params;
            const id = params?.id;
            const data = await transactionService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePutSuccess('Transaction'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PATCH: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<Transaction>>> => {
        try {
            const requestBody =
                (await request.json()) as UpdateTransactionRequest;
            const params = await context.params;
            const id = params?.id;
            const data = await transactionService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePatchSuccess('Transaction'),
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
            const data = await transactionService.delete(id);
            return ApiResponse.success(
                data,
                createMessageDeleteSuccess('Transactions'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
