import { type Guarantor } from '@prisma/client';
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
    CreateGuarantorRequest,
    GuarantorWithRelations,
    UpdateGuarantorRequest,
} from './guarantor.model';
import { guarantorService } from './guarantor.service';
import { BadRequestException } from '~/server/helper/error.exception';

export const guarantorController = {
    GET: async (): Promise<
        NextResponse<IApiResponse<GuarantorWithRelations[]>>
    > => {
        try {
            const data = await guarantorService.getAll();
            return ApiResponse.success(
                data,
                createMessageGetSuccess('Guarantors'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<GuarantorWithRelations>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await guarantorService.getById(id);
            return ApiResponse.success(
                data,
                createMessageGetUniqueSuccess('Guarantor', `id : ${id}`),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    GET_LENGTH: async (): Promise<NextResponse<IApiResponse<number>>> => {
        try {
            const data = await guarantorService.countAll();
            return ApiResponse.success(
                data,
                createMessageGetLengthSuccess('Guarantors'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    POST: async (
        request: NextRequest,
    ): Promise<NextResponse<IApiResponse<Guarantor>>> => {
        try {
            const requestBody =
                (await request.json()) as CreateGuarantorRequest;
            const data = await guarantorService.create(requestBody);
            return ApiResponse.success(
                data,
                createMessagePostSuccess('Guarantor'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    PUT: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<Guarantor>>> => {
        try {
            const requestBody =
                (await request.json()) as UpdateGuarantorRequest;
            if (
                !(
                    requestBody.name &&
                    requestBody.national_id &&
                    requestBody.id_card_address &&
                    requestBody.residential_address &&
                    requestBody.residential_address &&
                    requestBody.phone &&
                    requestBody.customer_id
                )
            ) {
                throw new BadRequestException('Required fields are missing');
            }
            const params = await context.params;
            const id = params?.id;
            const data = await guarantorService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePutSuccess('Guarantor'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
    PATCH: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<Guarantor>>> => {
        try {
            const requestBody =
                (await request.json()) as UpdateGuarantorRequest;
            const params = await context.params;
            const id = params?.id;
            const data = await guarantorService.update(id, requestBody);

            return ApiResponse.success(
                data,
                createMessagePatchSuccess('Guarantor'),
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
            const data = await guarantorService.delete(id);
            return ApiResponse.success(
                data,
                createMessageDeleteSuccess('Guarantors'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
