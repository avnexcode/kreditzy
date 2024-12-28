import { db } from '~/server/db/prisma';
import { type Guarantor } from '@prisma/client';
import type {
    CreateGuarantorRequest,
    GuarantorWithRelations,
    UpdateGuarantorRequest,
} from './guarantor.model';

export const guarantorRepository = {
    findMany: async (): Promise<GuarantorWithRelations[]> => {
        const guarantors = await db.guarantor.findMany({
            include: {
                customer: true,
            },
        });

        return guarantors;
    },
    countMany: async (): Promise<number> => {
        const countguarantors = await db.guarantor.count();
        return countguarantors;
    },

    findUniqueId: async (
        id: string,
    ): Promise<GuarantorWithRelations | null> => {
        const guarantor = await db.guarantor.findUnique({
            where: { id },
            include: {
                customer: true,
            },
        });

        return guarantor;
    },

    findUniqueNationalId: async (
        national_id: string,
    ): Promise<GuarantorWithRelations | null> => {
        const guarantor = await db.guarantor.findUnique({
            where: { national_id },
            include: {
                customer: true,
            },
        });
        return guarantor;
    },

    countUniqueNationalId: async (national_id: string): Promise<number> => {
        const countguarantors = await db.guarantor.count({
            where: { national_id },
        });
        return countguarantors;
    },

    insertOnce: async (
        request: CreateGuarantorRequest,
    ): Promise<Guarantor | null> => {
        const guarantor = await db.guarantor.create({ data: { ...request } });

        return guarantor;
    },

    updateOnce: async (
        id: string,
        request: UpdateGuarantorRequest,
    ): Promise<Guarantor | null> => {
        const guarantor = await db.guarantor.update({
            where: { id },
            data: { ...request },
        });

        return guarantor;
    },

    deleteOnce: async (id: string): Promise<Guarantor | null> => {
        const guarantor = await db.guarantor.delete({ where: { id } });
        return guarantor;
    },
};
