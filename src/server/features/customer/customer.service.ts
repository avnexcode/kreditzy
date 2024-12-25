import { validateSchema } from '~/server/service/validation.service';
import type {
    CreateCustomerRequest,
    UpdateCustomerRequest,
} from './customer.model';
import { customerRepository } from './customer.repository';
import {
    createCustomerRequest,
    updateCustomerRequest,
} from './customer.validation';
import { NotFoundException } from '~/server/helper/error.exception';
import { type Customer } from '@prisma/client';

export const customerService = {
    getAll: async (): Promise<Customer[]> => {
        const customers = await customerRepository.findMany();
        return customers!;
    },

    getById: async (id: string): Promise<Customer> => {
        const customer = await customerRepository.findUniqueId(id);

        if (!customer) {
            throw new NotFoundException(`Customer with id ${id} not found`);
        }

        return customer;
    },

    countAll: async (): Promise<number> => {
        const countCustomers = await customerRepository.countMany();
        return countCustomers;
    },

    create: async (request: CreateCustomerRequest): Promise<Customer> => {
        const validatedRequest: CreateCustomerRequest = validateSchema(
            createCustomerRequest,
            request,
        );

        const customer = await customerRepository.insertOnce(validatedRequest);

        return customer!;
    },

    update: async (
        id: string,
        request: UpdateCustomerRequest,
    ): Promise<Customer> => {
        await customerService.getById(id);
        const validatedRequest: UpdateCustomerRequest = validateSchema(
            updateCustomerRequest,
            request,
        );

        const customer = await customerRepository.updateOnce(
            id,
            validatedRequest,
        );

        return customer!;
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await customerService.getById(id);

        await customerRepository.deleteOnce(id);

        return { id };
    },
};
