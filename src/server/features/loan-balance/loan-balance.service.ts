import { LoanBalance } from '@prisma/client';
import {
    CreateLoanBalanceRequest,
    LoanBalanceWithRelationsResponse,
    UpdateLoanBalanceRequest,
} from './loan-balance.model';
import { loanBalanceRepository } from './loan-balance.repository';
import { StatsResponse, Trend } from '~/server/types/api';
import { NotFoundException } from '~/server/helper/error.exception';
import { validateSchema } from '~/server/service/validation.service';
import {
    createLoanBalanceRequest,
    updateLoanBalanceRequest,
} from './loan-balance.validation';

export const loanBalanceService = {
    getAll: async (): Promise<LoanBalanceWithRelationsResponse[]> => {
        const response = await loanBalanceRepository.findMany();

        const loanBalances = response.map(loanBalance => loanBalance);

        return loanBalances;
    },

    getById: async (id: string): Promise<LoanBalanceWithRelationsResponse> => {
        const loanBalance = await loanBalanceRepository.findUniqueId(id);

        if (!loanBalance) {
            throw new NotFoundException(
                `Not found loan balance with id = ${id}.`,
            );
        }

        return loanBalance;
    },

    countAll: async (): Promise<number> => {
        const countLoanBalances = await loanBalanceRepository.countMany();

        return countLoanBalances;
    },

    countById: async (id: string): Promise<number> => {
        const countLoanBalance = await loanBalanceRepository.countUniqueId(id);

        return countLoanBalance;
    },

    countByTransactionId: async (transaction_id: string): Promise<number> => {
        const countLoanBalance =
            await loanBalanceRepository.countUniqueTransactionId(
                transaction_id,
            );

        return countLoanBalance;
    },

    countExistsById: async (id: string): Promise<number> => {
        const countLoanBalance = await loanBalanceRepository.countUniqueId(id);

        if (countLoanBalance === 0) {
            throw new NotFoundException(
                `Not found loan balance with id = ${id}.`,
            );
        }

        return countLoanBalance;
    },

    countAllPreviousMonth: async () => {
        const countGuarantors =
            await loanBalanceRepository.countManyPreviousMonth();

        return countGuarantors;
    },

    countAllCurrentMonth: async () => {
        const countGuarantors =
            await loanBalanceRepository.countManyCurrentMonth();

        return countGuarantors;
    },

    getTrend: async (): Promise<{
        percentage: number;
        trend: Trend;
    }> => {
        const currentMonth =
            await loanBalanceRepository.countManyCurrentMonth();

        const previousMonth =
            await loanBalanceRepository.countManyPreviousMonth();

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
        const length = await loanBalanceService.countAll();
        const trend = await loanBalanceService.getTrend();

        return { length, ...trend };
    },

    create: async (request: CreateLoanBalanceRequest): Promise<LoanBalance> => {
        const validatedRequest: CreateLoanBalanceRequest = validateSchema(
            createLoanBalanceRequest,
            request,
        );

        const loanBalance =
            await loanBalanceRepository.insert(validatedRequest);

        return loanBalance;
    },

    update: async (
        id: string,
        request: UpdateLoanBalanceRequest,
    ): Promise<LoanBalance> => {
        await loanBalanceService.countExistsById(id);

        const validatedRequest: UpdateLoanBalanceRequest = validateSchema(
            updateLoanBalanceRequest,
            request,
        );

        const loanBalance = await loanBalanceRepository.update(
            id,
            validatedRequest,
        );

        return loanBalance;
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await loanBalanceService.countExistsById(id);

        await loanBalanceRepository.delete(id);

        return { id };
    },
};
