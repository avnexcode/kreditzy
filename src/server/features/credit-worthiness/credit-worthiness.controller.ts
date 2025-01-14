import { type CreditWorthiness } from '@prisma/client';
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
    CreateCreditworthinessRequest,
    CreditWorthinessWithRelationsResponse,
    UpdateCreditworthinessRequest,
} from './credit-worthiness.model';
import { creditWorthinessService } from './credit-worthiness.service';
import { BadRequestException } from '~/server/helper/error.exception';
import { StatsResponse } from '~/server/types/api';

export const creditWorthinessController = {
    GET: async (): Promise<
        NextResponse<IApiResponse<CreditWorthinessWithRelationsResponse[]>>
    > => {
        try {
            const data = await creditWorthinessService.getAll();
            return ApiResponse.success(
                data,
                createMessageGetSuccess('Credit worthinesses'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<
        NextResponse<IApiResponse<CreditWorthinessWithRelationsResponse>>
    > => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await creditWorthinessService.getById(id);
            return ApiResponse.success(
                data,
                createMessageGetUniqueSuccess(
                    'Credit worthiness',
                    `id : ${id}`,
                ),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    GET_STATS: async (): Promise<NextResponse<IApiResponse<StatsResponse>>> => {
        try {
            const data = await creditWorthinessService.getStats();
            return ApiResponse.success(
                data,
                createMessageGetStatsSuccess('Credit worthinesses'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<IApiResponse<CreditWorthiness>>> => {
        try {
            const requestBody =
                (await request.json()) as CreateCreditworthinessRequest;
            const data = await creditWorthinessService.create(requestBody);
            return ApiResponse.created(
                data,
                createMessagePostSuccess('Credit worthiness'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PUT: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<CreditWorthiness>>> => {
        try {
            const requestBody =
                (await request.json()) as UpdateCreditworthinessRequest;
            if (
                !(
                    requestBody.status &&
                    requestBody.customer_id &&
                    requestBody.loan_reference_id
                )
            ) {
                throw new BadRequestException('Required fields are missing');
            }
            const params = await context.params;
            const id = params?.id;
            const data = await creditWorthinessService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePutSuccess('Credit worthiness'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PATCH: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<CreditWorthiness>>> => {
        try {
            const requestBody =
                (await request.json()) as UpdateCreditworthinessRequest;
            const params = await context.params;
            const id = params?.id;
            const data = await creditWorthinessService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePatchSuccess('Credit worthiness'),
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
            const data = await creditWorthinessService.delete(id);
            return ApiResponse.success(
                data,
                createMessageDeleteSuccess('Credit worthiness'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
