import { db } from '~/server/db/prisma';
import type {
    CreateCustomerRequest,
    UpdateCustomerRequest,
} from './customer.model';
import { type Customer } from '@prisma/client';

export const customerRepository = {
    findMany: async (): Promise<Customer[] | null> => {
        const customers = await db.customer.findMany();

        return customers;
    },
    countMany: async (): Promise<number> => {
        const countCustomers = await db.customer.count();
        return countCustomers;
    },

    findUniqueId: async (id: string): Promise<Customer | null> => {
        const customer = await db.customer.findUnique({ where: { id } });

        return customer;
    },

    insertOnce: async (
        request: CreateCustomerRequest,
    ): Promise<Customer | null> => {
        const customer = await db.customer.create({ data: { ...request } });

        return customer;
    },

    updateOnce: async (
        id: string,
        request: UpdateCustomerRequest,
    ): Promise<Customer | null> => {
        const customer = await db.customer.update({
            where: { id },
            data: { ...request },
        });

        return customer;
    },

    deleteOnce: async (id: string): Promise<Customer | null> => {
        const customer = await db.customer.delete({ where: { id } });
        return customer;
    },
};
