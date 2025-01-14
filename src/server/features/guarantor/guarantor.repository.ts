import { db } from '~/server/db/prisma';
import { type Guarantor } from '@prisma/client';
import type {
    CreateGuarantorRequest,
    GuarantorWithCustomerRelationsResponse,
    GuarantorWithRelationsResponse,
    UpdateGuarantorRequest,
} from './guarantor.model';

export const guarantorRepository = {
    findMany: async (): Promise<GuarantorWithRelationsResponse[]> => {
        const guarantors = await db.guarantor.findMany({
            include: {
                customer: true,
            },
        });

        return guarantors;
    },

    countMany: async (): Promise<number> => {
        const countGuarantors = await db.guarantor.count();

        return countGuarantors;
    },

    countUniqueId: async (id: string): Promise<number> => {
        const countGuarantor = await db.guarantor.count({ where: { id } });

        return countGuarantor;
    },

    countManyPreviousMonth: async (): Promise<number> => {
        const today = new Date();
        const firstDayPrevMonth = new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            1,
        );
        const lastDayPrevMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0,
        );

        const countGuarantors = await db.guarantor.count({
            where: {
                created_at: {
                    gte: firstDayPrevMonth,
                    lte: lastDayPrevMonth,
                },
            },
        });

        return countGuarantors;
    },

    countManyCurrentMonth: async (): Promise<number> => {
        const today = new Date();
        const firstDayCurrentMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            1,
        );
        const lastDayCurrentMonth = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            0,
        );

        const countGuarantors = await db.guarantor.count({
            where: {
                created_at: {
                    gte: firstDayCurrentMonth,
                    lte: lastDayCurrentMonth,
                },
            },
        });

        return countGuarantors;
    },

    findUniqueId: async (
        id: string,
    ): Promise<GuarantorWithRelationsResponse | null> => {
        const guarantor = await db.guarantor.findUnique({
            where: { id },
            include: {
                customer: true,
            },
        });

        return guarantor;
    },

    findUniqueIdWithCustomerRelations: async (
        id: string,
    ): Promise<GuarantorWithCustomerRelationsResponse | null> => {
        const guarantor = await db.guarantor.findUnique({
            where: { id },
            include: {
                customer: {
                    include: {
                        loan_reference: true,
                        guarantors: true,
                    },
                },
            },
        });

        return guarantor;
    },

    findUniqueNationalId: async (
        national_id: string,
    ): Promise<GuarantorWithRelationsResponse | null> => {
        const guarantor = await db.guarantor.findUnique({
            where: { national_id },
            include: {
                customer: true,
            },
        });
        return guarantor;
    },

    countUniqueNationalId: async (national_id: string): Promise<number> => {
        const countGuarantors = await db.guarantor.count({
            where: { national_id },
        });
        return countGuarantors;
    },

    insert: async (
        request: CreateGuarantorRequest,
    ): Promise<Guarantor | null> => {
        const guarantor = await db.guarantor.create({ data: { ...request } });

        return guarantor;
    },

    update: async (
        id: string,
        request: UpdateGuarantorRequest,
    ): Promise<Guarantor | null> => {
        const guarantor = await db.guarantor.update({
            where: { id },
            data: { ...request },
        });

        return guarantor;
    },

    delete: async (id: string): Promise<Guarantor | null> => {
        const guarantor = await db.guarantor.delete({ where: { id } });
        return guarantor;
    },
};
