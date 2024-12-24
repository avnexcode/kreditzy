import { ZodError } from 'zod';
import { HttpException } from '../helper/error.exception';
import { ApiResponse } from '../helper/api.response';
import { type NextResponse } from 'next/server';
import type { IApiErrorResponse } from '../interfaces/Api';

export class ErrorFilter {
    static catch(error: unknown): NextResponse<IApiErrorResponse> {
        if (error instanceof HttpException) {
            return ApiResponse.error(error.statusCode, error.message);
        }

        if (error instanceof ZodError) {
            const stack = error.errors.map(err => ({
                field: err.path.join('.'),
                message: err.message,
            }));
            return ApiResponse.error(400, 'Validation Error', stack);
        }

        return ApiResponse.error(
            500,
            error instanceof Error ? error.message : 'Internal server error',
        );
    }
}
