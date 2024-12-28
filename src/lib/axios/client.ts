// import { useSession } from 'next-auth/react';
// import { useEffect } from 'react';
// import type { AxiosError } from 'axios';
// import { axiosTest } from './server';

// export const useAxiosAuth = () => {
//     const { data: session } = useSession();
//     useEffect(() => {
//         const requestIntercept = axiosTest.interceptors.request.use(
//             config => {
//                 if (!config.headers.Authorization) {
//                     config.headers.Authorization = `Bearer ${session?.user.access_token}`;
//                 }
//                 return config;
//             },
//             (error: AxiosError) => Promise.reject(error),
//         );

//         const responseIntercept = axiosTest.interceptors.response.use(
//             response => response,
//             (error: AxiosError) => Promise.reject(error),
//         );

//         return () => {
//             axiosTest.interceptors.request.eject(requestIntercept);
//             axiosTest.interceptors.response.eject(responseIntercept);
//         };
//     }, [session]);

//     return axiosTest;
// };
