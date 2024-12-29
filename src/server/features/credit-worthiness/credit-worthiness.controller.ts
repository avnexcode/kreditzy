import { type CreditWorthiness } from '@prisma/client';
import type { NextResponse, NextRequest } from 'next/server';
import { ErrorFilter } from '~/server/filter/error.filter';
import type { IApiResponse } from '~/server/interfaces/Api';
import { ApiResponse } from '~/server/helper/api.response';
import {
    createMessageDeleteSuccess,
    createMessageGetLengthSuccess,
    createMessageGetSuccess,
    createMessageGetUniqueSuccess,
    createMessagePatchSuccess,
    createMessagePostSuccess,
    createMessagePutSuccess,
} from '~/server/helper/message.response';
import type {
    CreateCreditworthinessRequest,
    CreditWorthinessWithRelations,
    UpdateCreditworthinessRequest,
} from './credit-worthiness.model';
import { creditWorthinessService } from './credit-worthiness.service';

export const creditWorthinessController = {
    GET: async (): Promise<
        NextResponse<IApiResponse<CreditWorthinessWithRelations[]>>
    > => {
        try {
            const data = await customerService.getAll();
            return ApiResponse.success(
                data,
                createMessageGetSuccess('Customers'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<CreditWorthinessWithRelations>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await customerService.getById(id);
            return ApiResponse.success(
                data,
                createMessageGetUniqueSuccess('Customer', `id : ${id}`),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    GET_LENGTH: async (): Promise<NextResponse<IApiResponse<number>>> => {
        try {
            const data = await creditWorthinessService.countAll();
            return ApiResponse.success(
                data,
                createMessageGetLengthSuccess('Customers'),
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
            const data = await customerService.create(requestBody);
            return ApiResponse.success(
                data,
                createMessagePostSuccess('Customer'),
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
            const params = await context.params;
            const id = params?.id;
            const data = await customerService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePutSuccess('Customer'),
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
            const data = await customerService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePatchSuccess('Customer'),
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
            const data = await customerService.delete(id);
            return ApiResponse.success(
                data,
                createMessageDeleteSuccess('Customers'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
