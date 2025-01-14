import { db } from '~/server/db/prisma';
import type {
    CreateCustomerRequest,
    CustomerWithRelationsResponse,
    UpdateCustomerRequest,
} from './customer.model';
import { type Customer } from '@prisma/client';

export const customerRepository = {
    findMany: async (): Promise<CustomerWithRelationsResponse[]> => {
        const customers = await db.customer.findMany({
            include: {
                guarantors: true,
                loan_reference: true,
                credit_worthiness: true,
                transaction: true,
            },
        });

        return customers;
    },

    countMany: async (): Promise<number> => {
        const countCustomers = await db.customer.count();
        return countCustomers;
    },

    countUniqueId: async (id: string): Promise<number> => {
        const countCustomer = await db.customer.count({ where: { id } });
        return countCustomer;
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

        const countCustomers = await db.customer.count({
            where: {
                created_at: {
                    gte: firstDayPrevMonth,
                    lte: lastDayPrevMonth,
                },
            },
        });

        return countCustomers;
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

        const countCustomers = await db.customer.count({
            where: {
                created_at: {
                    gte: firstDayCurrentMonth,
                    lte: lastDayCurrentMonth,
                },
            },
        });

        return countCustomers;
    },

    findUniqueId: async (
        id: string,
    ): Promise<CustomerWithRelationsResponse | null> => {
        const customer = await db.customer.findUnique({
            where: { id },
            include: {
                guarantors: true,
                loan_reference: true,
                credit_worthiness: true,
                transaction: true,
            },
        });

        return customer;
    },

    findUniqueNationalId: async (
        national_id: string,
    ): Promise<CustomerWithRelationsResponse | null> => {
        const customer = await db.customer.findUnique({
            where: { national_id },
            include: {
                guarantors: true,
                loan_reference: true,
                credit_worthiness: true,
                transaction: true,
            },
        });

        return customer;
    },

    countUniqueNationalId: async (national_id: string): Promise<number> => {
        const countCustomers = await db.customer.count({
            where: { national_id },
        });
        return countCustomers;
    },

    insert: async (request: CreateCustomerRequest): Promise<Customer> => {
        const customer = await db.customer.create({ data: { ...request } });

        return customer;
    },

    update: async (
        id: string,
        request: UpdateCustomerRequest,
    ): Promise<Customer> => {
        const customer = await db.customer.update({
            where: { id },
            data: { ...request },
        });

        return customer;
    },

    delete: async (id: string): Promise<Customer | null> => {
        const customer = await db.customer.delete({ where: { id } });
        return customer;
    },
};
