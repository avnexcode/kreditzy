import { type NextRequest, type NextResponse } from 'next/server';
import { authService } from './auth.service';
import { ErrorFilter } from '~/server/filter/error.filter';
import type { RegisterRequest } from './auth.model';
import { ApiResponse } from '~/server/helper/api.response';
import type { IApiResponse } from '~/server/interfaces/Api';
import type { SafeUserResponse } from '../user/user.model';

export const authController = {
    REGISTER: async (
        request: NextRequest,
    ): Promise<NextResponse<IApiResponse<SafeUserResponse>>> => {
        try {
            const requestBody = (await request.json()) as RegisterRequest;
            const data = await authService.register({
                ...requestBody,
                provider: 'credentials',
            });
            return ApiResponse.created(data, 'Register user successfully');
        } catch (error) {
            return ErrorFilter.catch(error);
        }
    },
};
