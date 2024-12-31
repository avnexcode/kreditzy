import { type z } from 'zod';
import type { resetPasswordRequest } from './reset-password.validation';

export type ResetPasswordRequest = z.infer<typeof resetPasswordRequest>;
