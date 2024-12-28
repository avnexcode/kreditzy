import { type LoanReference } from '@prisma/client';
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
    CreateLoanReferenceRequest,
    LoanReferenceWithRelations,
    UpdateLoanReferenceRequest,
} from './loan-reference.model';
import { loanReferenceService } from './loan-reference.service';

export const loanReferenceController = {
    GET: async (): Promise<
        NextResponse<IApiResponse<LoanReferenceWithRelations[]>>
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
    ): Promise<NextResponse<IApiResponse<LoanReferenceWithRelations>>> => {
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
    GET_LENGTH: async (): Promise<NextResponse<IApiResponse<number>>> => {
        try {
            const data = await loanReferenceService.countAll();
            return ApiResponse.success(
                data,
                createMessageGetLengthSuccess('Loan references'),
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
    ): Promise<NextResponse<IApiResponse<{ count: number }>>> => {
        try {
            const requestBody =
                (await request.json()) as CreateLoanReferenceRequest[];
            const data = await loanReferenceService.createMany(requestBody);
            return ApiResponse.success(
                data,
                createMessagePostSuccess('Loan references'),
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
