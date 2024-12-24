import { auth } from '~/server/config/auth';

export const currentUser = async () => {
    const session = await auth();
    return session?.user;
};

export const currentAccessToken = async () => {
    const session = await auth();
    return session?.user.access_token;
};
