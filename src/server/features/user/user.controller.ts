import { type NextRequest, type NextResponse } from 'next/server';
import { userService } from './user.service';
import { ErrorFilter } from '~/server/filter/error.filter';
import { ApiResponse } from '~/server/helper/api.response';
import {
    createMessageDeleteSuccess,
    createMessageGetSuccess,
    createMessageGetUniqueSuccess,
    createMessagePatchSuccess,
    createMessagePutSuccess,
} from '~/server/helper/message.response';
import type { IApiResponse } from '~/server/interfaces/Api';
import type { SafeUserResponse, UpdateUserRequest } from './user.model';
import { BadRequestException } from '~/server/helper/error.exception';

export const userController = {
    GET: async (): Promise<NextResponse<IApiResponse<SafeUserResponse[]>>> => {
        try {
            const data = await userService.getAll();
            return ApiResponse.success(data, createMessageGetSuccess('User'));
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    GET_ID: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<SafeUserResponse>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const data = await userService.getById(id);
            return ApiResponse.success(
                data,
                createMessageGetUniqueSuccess('User', 'id'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PUT: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<SafeUserResponse>>> => {
        try {
            const requestBody = (await request.json()) as UpdateUserRequest;
            if (
                !(
                    requestBody.username &&
                    requestBody.name &&
                    requestBody.email &&
                    requestBody.phone
                )
            ) {
                throw new BadRequestException(
                    'Data yang dibutuhkan tidak lengkap',
                );
            }
            const params = await context.params;
            const id = params?.id;
            const data = await userService.update(id, requestBody);

            return ApiResponse.success(data, createMessagePutSuccess('User'));
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },

    PATCH: async (
        request: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<SafeUserResponse>>> => {
        try {
            const requestBody = (await request.json()) as UpdateUserRequest;
            const params = await context.params;
            const id = params?.id;
            const data = await userService.update(id, requestBody);

            return ApiResponse.success(data, createMessagePatchSuccess('User'));
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
            const id = params?.id;

            const data = await userService.delete(id);
            return ApiResponse.success(
                data,
                createMessageDeleteSuccess('User'),
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
