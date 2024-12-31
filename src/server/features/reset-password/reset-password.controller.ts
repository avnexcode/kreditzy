import { type NextRequest, NextResponse } from 'next/server';
import { resetPasswordService } from './reset-password.service';
import { type ResetPasswordRequest } from './reset-password.model';
import type { SafeUserResponse } from '../user/user.model';
import type { IApiResponse } from '~/server/interfaces/Api';
import { BadRequestException } from '~/server/helper/error.exception';
import { createMessagePatchSuccess } from '~/server/helper/message.response';
import { ErrorFilter } from '~/server/filter/error.filter';

export const resetPasswordController = {
    PATCH: async (
        req: NextRequest,
        context: { params: Promise<{ id: string }> },
    ): Promise<NextResponse<IApiResponse<SafeUserResponse>>> => {
        try {
            const params = await context.params;
            const id = params?.id;

            const requestBody = (await req.json()) as ResetPasswordRequest;

            console.log({ requestBody });

            if (!(requestBody.password && requestBody.new_password)) {
                throw new BadRequestException(
                    'Password and new password required',
                );
            }

            const data = await resetPasswordService.updatePassword(
                id,
                requestBody.password,
                requestBody.new_password,
            );

            return NextResponse.json(
                {
                    status: true,
                    statusCode: 200,
                    message: createMessagePatchSuccess('Password user'),
                    data,
                },
                { status: 200 },
            );
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
