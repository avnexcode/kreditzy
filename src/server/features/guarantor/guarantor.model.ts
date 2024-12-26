import { type z } from 'zod';
import type {
    createGuarantorRequest,
    updateGuarantorRequest,
} from './guarantor.validation';
import { Prisma } from '@prisma/client';

export type CreateGuarantorRequest = z.infer<typeof createGuarantorRequest>;
export type UpdateGuarantorRequest = z.infer<typeof updateGuarantorRequest>;

export type GuarantorWithRelations = Prisma.GuarantorGetPayload<{
    include: {
        customer: true;
    };
}>;
