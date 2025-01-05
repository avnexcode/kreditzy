import { NextResponse } from 'next/server';
import { auth } from './server/config/auth';
import {
    apiAuthPrefix,
    authRoutes,
    DEFAULT_AUTH_REDIRECT,
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
} from './routes';

const isRouteMatch = (pathname: string, route: string) => {
    if (pathname === route) return true;
    if (route.includes(':id')) {
        const routePattern = new RegExp(
            '^' + route.replace(':id', '[^/]+') + '$',
        );
        return routePattern.test(pathname);
    }
    if (route.endsWith('/*')) {
        const baseRoute = route.slice(0, -2);
        return pathname.startsWith(baseRoute);
    }
    return false;
};

const middleware = auth(async request => {
    const { nextUrl } = request;
    const isLoggedIn = !!request.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.some(route =>
        isRouteMatch(nextUrl.pathname, route),
    );

    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(
                new URL(DEFAULT_AUTH_REDIRECT, nextUrl),
            );
        }
        return NextResponse.next();
    }

    if (!isLoggedIn && !isPublicRoute) {
        const callbackUrl = nextUrl.pathname + nextUrl.search;
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);
        return NextResponse.redirect(
            new URL(
                `${DEFAULT_LOGIN_REDIRECT}?callbackUrl=${encodedCallbackUrl}`,
                nextUrl,
            ),
        );
    }

    return NextResponse.next();
});

export default middleware;

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
