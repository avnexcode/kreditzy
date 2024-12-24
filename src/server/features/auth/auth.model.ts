import { type z } from 'zod';
import type { registerRequest, loginRequest } from './auth.validation';

export type LoginRequest = z.infer<typeof loginRequest>;
export type RegisterRequest = z.infer<typeof registerRequest>;
