import { NextResponse } from 'next/server';
import { auth } from './server/config/auth';
import {
    apiAuthPrefix,
    authRoutes,
    DEFAULT_AUTH_REDIRECT,
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
} from './routes';

export default auth(async req => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const authHeader = req.headers.get('Authorization');
    const access_token = authHeader?.split(' ')[1];

    // Check route types
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    // Allow API authentication routes to proceed
    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    // Redirect to dashboard if user is logged in and trying to access auth pages
    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(
                new URL(DEFAULT_LOGIN_REDIRECT, nextUrl),
            );
        }
        return NextResponse.next();
    }

    // Handle non-public routes when user is not logged in
    if (!isLoggedIn && !isPublicRoute) {
        const callbackUrl = nextUrl.pathname + nextUrl.search;
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);
        return NextResponse.redirect(
            new URL(
                `${DEFAULT_AUTH_REDIRECT}?callbackUrl=${encodedCallbackUrl}`,
                nextUrl,
            ),
        );
    }

    return NextResponse.next();
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
