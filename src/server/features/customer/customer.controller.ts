import { type Customer } from '@prisma/client';
import type { NextResponse, NextRequest } from 'next/server';
import { ErrorFilter } from '~/server/filter/error.filter';
import type { IApiResponse } from '~/server/interfaces/Api';
import { customerService } from './customer.service';
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
    CreateCustomerRequest,
    CustomerWithRelations,
    UpdateCustomerRequest,
} from './customer.model';
import { BadRequestException } from '~/server/helper/error.exception';

export const customerController = {
    GET: async (): Promise<
        NextResponse<IApiResponse<CustomerWithRelations[]>>
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
    ): Promise<NextResponse<IApiResponse<CustomerWithRelations>>> => {
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
            const data = await customerService.countAll();
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
    ): Promise<NextResponse<IApiResponse<Customer>>> => {
        try {
            const requestBody = (await request.json()) as CreateCustomerRequest;
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
    ): Promise<NextResponse<IApiResponse<Customer>>> => {
        try {
            const requestBody = (await request.json()) as UpdateCustomerRequest;
            if (
                !(
                    requestBody.name &&
                    requestBody.national_id &&
                    requestBody.id_card_address &&
                    requestBody.residential_address &&
                    requestBody.residential_address &&
                    requestBody.phone
                )
            ) {
                throw new BadRequestException('Required fields are missing');
            }

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
    ): Promise<NextResponse<IApiResponse<Customer>>> => {
        try {
            const requestBody = (await request.json()) as UpdateCustomerRequest;
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
                createMessageDeleteSuccess('Customer'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
