import { PrismaAdapter } from '@auth/prisma-adapter';
import { type NextAuthConfig } from 'next-auth';
import { db } from '~/server/db/prisma';

export const adapter: NextAuthConfig['adapter'] = PrismaAdapter(db);
