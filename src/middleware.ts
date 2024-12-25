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

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.some(route => {
        if (nextUrl.pathname === route) {
            return true;
        }
        if (route.includes(':id')) {
            const routePattern = new RegExp(
                '^' + route.replace(':id', '[^/]+') + '$',
            );
            return routePattern.test(nextUrl.pathname);
        }
        if (route.endsWith('/*')) {
            const baseRoute = route.slice(0, -2);
            return nextUrl.pathname.startsWith(baseRoute);
        }

        return false;
    });
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(
                new URL(DEFAULT_LOGIN_REDIRECT, nextUrl),
            );
        }
        return NextResponse.next();
    }

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
