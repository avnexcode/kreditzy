import { type NextAuthConfig } from 'next-auth';
import { providers } from './providers';
import { adapter } from './adapter';
import { callbacks } from './callbacks';
import { pages } from './pages';
import { session } from './session';

import { env } from '~/config/env';

export const authConfig = {
    trustHost: true,
    session,
    secret: env.AUTH_SECRET,
    providers,
    adapter,
    callbacks,
    pages,
} satisfies NextAuthConfig;
