import { NextResponse } from 'next/server';
import type { IApiErrorResponse, IApiSuccessResponse } from '../interfaces/Api';

export class ApiResponse {
    public static success<T>(
        data: T | null,
        message = 'Success',
        statusCode = 200,
    ): NextResponse<IApiSuccessResponse<T>> {
        return NextResponse.json({
            status: true,
            statusCode,
            message,
            data,
        });
    }

    public static created<T>(data: T, message = 'Created successfully') {
        return this.success(data, message, 201);
    }

    public static error(
        statusCode = 500,
        error: string,
        stack?: Array<Record<string, unknown>>,
    ): NextResponse<IApiErrorResponse> {
        return NextResponse.json({
            status: false,
            statusCode,
            error,
            stack,
        });
    }
}
