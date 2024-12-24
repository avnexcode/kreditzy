import { type NextFetchEvent, type NextRequest } from 'next/server';

export type MiddlewareFactory<T> = (
    middleware: (
        request: NextRequest,
        next: NextFetchEvent,
    ) => Promise<Response>,
    options?: T,
) => (request: NextRequest, next: NextFetchEvent) => Promise<Response>;
