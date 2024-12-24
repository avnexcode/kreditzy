export interface IApiSuccessResponse<T> {
    status: boolean;
    statusCode: number;
    message: string;
    data: T | null;
}

export interface IApiErrorResponse {
    status: boolean;
    statusCode: number;
    error: string;
    stack?: Array<Record<string, unknown>>;
}

export type IApiResponse<T> = IApiSuccessResponse<T> | IApiErrorResponse;
