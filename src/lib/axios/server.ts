import axios from 'axios';
import { AXIOS_CONFIG } from './config';

export const axiosInstance = axios.create(AXIOS_CONFIG);
export const axiosAuth = axios.create(AXIOS_CONFIG);
export const axiosTest = axios.create(AXIOS_CONFIG);
