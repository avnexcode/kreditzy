import { type Customer } from '@prisma/client';
import { customerRepository } from './customer.repository';
import { validateSchema } from '~/server/service/validation.service';
import type {
    CreateCustomerRequest,
    CustomerWithRelationsResponse,
    UpdateCustomerRequest,
} from './customer.model';
import {
    createCustomerRequest,
    updateCustomerRequest,
} from './customer.validation';
import {
    BadRequestException,
    NotFoundException,
} from '~/server/helper/error.exception';
import {
    toCustomerResponse,
    toCustomerWithRelationsResponse,
} from './customer.response';
import { StatsResponse, Trend } from '~/server/types/api';

export const customerService = {
    getAll: async (): Promise<CustomerWithRelationsResponse[]> => {
        const response = await customerRepository.findMany();

        const customers = response?.map(customer =>
            toCustomerWithRelationsResponse(customer),
        );

        return customers;
    },

    getById: async (id: string): Promise<CustomerWithRelationsResponse> => {
        const customer = await customerRepository.findUniqueId(id);

        if (!customer) {
            throw new NotFoundException(`Customer with id : ${id} not found`);
        }

        return toCustomerWithRelationsResponse(customer);
    },

    countAll: async (): Promise<number> => {
        const countCustomers = await customerRepository.countMany();

        return countCustomers;
    },

    countAllPreviousMonth: async () => {
        const countCustomers =
            await customerRepository.countManyPreviousMonth();

        return countCustomers;
    },

    countAllCurrentMonth: async () => {
        const countCustomers = await customerRepository.countManyCurrentMonth();

        return countCustomers;
    },

    getTrend: async (): Promise<{
        percentage: number;
        trend: Trend;
    }> => {
        const currentMonth = await customerRepository.countManyCurrentMonth();

        const previousMonth = await customerRepository.countManyPreviousMonth();

        if (previousMonth === 0) {
            return {
                percentage: currentMonth > 0 ? 100 : 0,
                trend: currentMonth > 0 ? 'increase' : 'same',
            };
        }

        const percentageChange =
            ((currentMonth - previousMonth) / previousMonth) * 100;

        const trend =
            percentageChange > 0
                ? 'increase'
                : percentageChange < 0
                  ? 'decrease'
                  : 'same';

        return {
            percentage: Number(percentageChange.toFixed(2)),
            trend,
        };
    },

    getStats: async (): Promise<StatsResponse> => {
        const length = await customerService.countAll();
        const trend = await customerService.getTrend();

        return { length, ...trend };
    },

    create: async (request: CreateCustomerRequest): Promise<Customer> => {
        const validatedRequest: CreateCustomerRequest = validateSchema(
            createCustomerRequest,
            request,
        );

        const nationalIdExists = await customerRepository.countUniqueNationalId(
            validatedRequest.national_id,
        );

        if (nationalIdExists !== 0) {
            throw new BadRequestException('National id already exists');
        }

        const customer = await customerRepository.insert(validatedRequest);

        return toCustomerResponse(customer);
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

        const customerWithNationalIdExists =
            await customerRepository.findUniqueNationalId(
                validatedRequest.national_id ?? '',
            );

        if (
            customerWithNationalIdExists &&
            customerWithNationalIdExists.id !== id &&
            customerWithNationalIdExists.national_id === request.national_id
        ) {
            throw new BadRequestException('National id already exists');
        }

        const customer = await customerRepository.update(id, validatedRequest);

        return toCustomerResponse(customer);
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await customerService.getById(id);

        await customerRepository.delete(id);

        return { id };
    },
};
