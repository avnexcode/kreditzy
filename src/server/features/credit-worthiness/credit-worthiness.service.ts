import { validateSchema } from '~/server/service/validation.service';
import { creditWorthinessRepository } from './credit-worthiness.repository';
import { type CreditWorthiness } from '@prisma/client';
import type {
    CreateCreditworthinessRequest,
    CreditWorthinessWithRelationsResponse,
    UpdateCreditworthinessRequest,
} from './credit-worthiness.model';

import {
    createCreditWorthinessRequest,
    updateCreditWorthinessRequest,
} from './credit-worthiness.validation';
import { NotFoundException } from '~/server/helper/error.exception';
import {
    toCreditWorthinessResponse,
    toCreditWorthinessWithRelationsResponse,
} from './credit-worthiness.response';
import { StatsResponse, Trend } from '~/server/types/api';

export const creditWorthinessService = {
    getAll: async (): Promise<CreditWorthinessWithRelationsResponse[]> => {
        const response = await creditWorthinessRepository.findMany();

        const creditWorthinesses = response.map(creditWorthiness =>
            toCreditWorthinessWithRelationsResponse(creditWorthiness),
        );

        return creditWorthinesses;
    },

    getById: async (
        id: string,
    ): Promise<CreditWorthinessWithRelationsResponse> => {
        const creditWorthiness =
            await creditWorthinessRepository.findUniqueId(id);

        if (!creditWorthiness) {
            throw new NotFoundException(
                `Credit woorthiness with id : ${id} not found`,
            );
        }
        return toCreditWorthinessWithRelationsResponse(creditWorthiness);
    },

    getByCustomerId: async (
        customer_id: string,
    ): Promise<CreditWorthinessWithRelationsResponse> => {
        const creditWorthiness =
            await creditWorthinessRepository.findUniqueCustomerId(customer_id);

        if (!creditWorthiness) {
            throw new NotFoundException(
                `Credit woorthiness with customer id : ${customer_id} not found`,
            );
        }
        return toCreditWorthinessWithRelationsResponse(creditWorthiness);
    },

    getByLoanReferenceId: async (
        loan_reference_id: string,
    ): Promise<CreditWorthinessWithRelationsResponse> => {
        const creditWorthiness =
            await creditWorthinessRepository.findUniqueLoanReferenceId(
                loan_reference_id,
            );

        if (!creditWorthiness) {
            throw new NotFoundException(
                `Credit worthiness with loan reference id : ${loan_reference_id} not found`,
            );
        }
        return toCreditWorthinessWithRelationsResponse(creditWorthiness);
    },

    countAll: async (): Promise<number> => {
        const creditWorthinessesCount =
            await creditWorthinessRepository.countMany();

        return creditWorthinessesCount;
    },

    countById: async (id: string): Promise<number> => {
        const creditWorthinessCount =
            await creditWorthinessRepository.countUniqueId(id);

        return creditWorthinessCount;
    },

    countAllPreviousMonth: async () => {
        const countCustomers =
            await creditWorthinessRepository.countManyPreviousMonth();

        return countCustomers;
    },

    countAllCurrentMonth: async () => {
        const countCustomers =
            await creditWorthinessRepository.countManyCurrentMonth();

        return countCustomers;
    },

    getTrend: async (): Promise<{
        percentage: number;
        trend: Trend;
    }> => {
        const currentMonth =
            await creditWorthinessRepository.countManyCurrentMonth();

        const previousMonth =
            await creditWorthinessRepository.countManyPreviousMonth();

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
        const length = await creditWorthinessService.countAll();
        const trend = await creditWorthinessService.getTrend();

        return { length, ...trend };
    },

    create: async (
        request: CreateCreditworthinessRequest,
    ): Promise<CreditWorthiness> => {
        const validatedRequest: CreateCreditworthinessRequest = validateSchema(
            createCreditWorthinessRequest,
            request,
        );

        const creditWorthiness =
            await creditWorthinessRepository.insert(validatedRequest);

        return toCreditWorthinessResponse(creditWorthiness);
    },

    update: async (
        id: string,
        request: UpdateCreditworthinessRequest,
    ): Promise<CreditWorthiness> => {
        const validatedRequest: UpdateCreditworthinessRequest = validateSchema(
            updateCreditWorthinessRequest,
            request,
        );

        const creditWorthiness = await creditWorthinessRepository.update(
            id,
            validatedRequest,
        );

        return toCreditWorthinessResponse(creditWorthiness);
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await creditWorthinessRepository.delete(id);
        return { id };
    },
};
