import { type AxiosError } from 'axios';

export type ApiErrorResponse = {
    status: boolean;
    statusCode: number;
    error: string;
    stack?: Array<Record<string, unknown>>;
};

export type ApiResponse<T> = {
    status: boolean;
    statusCode: number;
    message: string;
    data: T;
};

export type ApiProps = {
    id?: string;
    onMutate?: () => Promise<void>;
    onSuccess?: () => Promise<void>;
    onError?: (error: AxiosError<ApiErrorResponse>) => Promise<void>;
};

export type Trend = 'increase' | 'decrease' | 'same';

export type StatsResponse = {
    length: number;
    trend: Trend;
    percentage: number;
};

export type PercentageResponse = {
    percentage: number;
    trend: Trend;
};
