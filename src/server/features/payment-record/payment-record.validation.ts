import { z } from 'zod';

export const createPaymentRecordRequest = z.object({});

export const updatePaymentRecordRequest = createPaymentRecordRequest.partial();
