import { env } from '~/config/env';

export const AXIOS_CONFIG = {
    baseURL: env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
} as const;
