import { type AxiosError } from 'axios';
import { axiosAuth } from './server';
import { currentAccessToken } from '../auth';

axiosAuth.interceptors.request.use(
    async config => {
        const access_token = await currentAccessToken();
        if (!config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
    },
    (error: AxiosError) => Promise.reject(error),
);
