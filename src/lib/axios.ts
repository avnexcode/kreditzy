import axios, { type AxiosError } from 'axios';
import { env } from '~/config/env';

export const axiosInstance = axios.create({
    baseURL: env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const axiosAuth = axios.create({
    baseURL: env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosAuth.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token') ?? '';
        if (token && !config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => Promise.reject(error),
);
