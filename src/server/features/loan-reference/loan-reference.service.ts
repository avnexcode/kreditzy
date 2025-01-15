import { TransactionStatus, type LoanReference } from '@prisma/client';
import { loanReferenceRepository } from './loan-reference.repository';
import { toLoanReferenceWithRelationsResponse } from './loan-reference.response';
import { validateSchema } from '~/server/service/validation.service';
import {
    BadRequestException,
    NotFoundException,
} from '~/server/helper/error.exception';
import {
    getCreditWorthiness,
    getInstallment,
    getMonthlySurplus,
} from '~/server/lib/decision-tree';
import {
    calculatedLoanValues,
    createLoanReferenceRequest,
    updateLoanReferenceRequest,
} from './loan-reference.validation';
import type {
    CalculatedLoanValues,
    CreateLoanReferenceRequest,
    LoanReferenceWithRelationsResponse,
    UpdateLoanReferenceRequest,
} from './loan-reference.model';
import { creditWorthinessService } from '../credit-worthiness/credit-worthiness.service';
import { customerService } from '../customer/customer.service';
import { StatsResponse, Trend } from '~/server/types/api';
import { transactionRepository } from '../transaction/transaction.repository';

export const loanReferenceService = {
    getAll: async (): Promise<LoanReferenceWithRelationsResponse[]> => {
        const response = await loanReferenceRepository.findMany();

        const loanReferences = response.map(loanReference =>
            toLoanReferenceWithRelationsResponse(loanReference),
        );

        return loanReferences;
    },

    getById: async (
        id: string,
    ): Promise<LoanReferenceWithRelationsResponse> => {
        const loanReference = await loanReferenceRepository.findUniqueId(id);

        if (!loanReference) {
            throw new NotFoundException(
                `Not found loan reference with id = ${id}.`,
            );
        }

        return toLoanReferenceWithRelationsResponse(loanReference);
    },

    getByCustomerId: async (customer_id: string) => {
        const loanReference =
            await loanReferenceRepository.findUniqueCustomerId(customer_id);

        if (!loanReference) {
            throw new NotFoundException(
                `Not found loan reference with customer id = ${customer_id}.`,
            );
        }

        return toLoanReferenceWithRelationsResponse(loanReference);
    },

    countAll: async (): Promise<number> => {
        const countLoanReferences = await loanReferenceRepository.countMany();

        return countLoanReferences;
    },

    countById: async (id: string): Promise<number> => {
        const countLoanReference =
            await loanReferenceRepository.countUniqueId(id);

        return countLoanReference;
    },

    countAllPreviousMonth: async () => {
        const countGuarantors =
            await loanReferenceRepository.countManyPreviousMonth();

        return countGuarantors;
    },

    countAllCurrentMonth: async () => {
        const countGuarantors =
            await loanReferenceRepository.countManyCurrentMonth();

        return countGuarantors;
    },

    countExistsById: async (id: string): Promise<number> => {
        const countLoanReference =
            await loanReferenceRepository.countUniqueId(id);

        if (countLoanReference === 0) {
            throw new NotFoundException(
                `Not found loan reference with id = ${id}.`,
            );
        }

        return countLoanReference;
    },

    getTrend: async (): Promise<{
        percentage: number;
        trend: Trend;
    }> => {
        const currentMonth =
            await loanReferenceRepository.countManyCurrentMonth();

        const previousMonth =
            await loanReferenceRepository.countManyPreviousMonth();

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
        const length = await loanReferenceService.countAll();
        const trend = await loanReferenceService.getTrend();

        return { length, ...trend };
    },

    create: async (
        request: CreateLoanReferenceRequest,
    ): Promise<LoanReference> => {
        const validatedRequest: CreateLoanReferenceRequest = validateSchema(
            createLoanReferenceRequest,
            request,
        );

        const customer = await customerService.getById(
            validatedRequest.customer_id,
        );

        if (customer.guarantors.length === 0) {
            throw new BadRequestException('Customer must have a guarantor');
        }

        const loanReferenceExists =
            await loanReferenceRepository.countUniqueCustomerId(
                validatedRequest.customer_id,
            );

        if (loanReferenceExists !== 0) {
            throw new BadRequestException(
                'This customer already has a loan reference data',
            );
        }

        const monthly_surplus = getMonthlySurplus(
            validatedRequest.monthly_income,
            validatedRequest.monthly_expenses,
        );

        const installment = getInstallment(
            validatedRequest.requested_loan_amount,
            validatedRequest.loan_term,
            1,
        );

        const validatedCalculatedLoanValues: CalculatedLoanValues =
            validateSchema(calculatedLoanValues, {
                monthly_surplus,
                installment,
            });

        const loanReference = await loanReferenceRepository.insert({
            ...validatedRequest,
            ...validatedCalculatedLoanValues,
        });

        const creditWorthinessStatus = getCreditWorthiness(loanReference);

        await creditWorthinessService.create({
            status: creditWorthinessStatus,
            customer_id: validatedRequest.customer_id,
            loan_reference_id: loanReference.id,
        });

        return loanReference;
    },

    createMany: async (
        requests: CreateLoanReferenceRequest[],
    ): Promise<number> => {
        const insertedReferences = await Promise.all(
            requests.map(async request => {
                const validatedRequest: CreateLoanReferenceRequest =
                    validateSchema(createLoanReferenceRequest, request);

                const customer = await customerService.getById(
                    validatedRequest.customer_id,
                );

                if (customer.guarantors.length === 0) {
                    throw new BadRequestException(
                        'Customer must have a guarantor',
                    );
                }

                const loanReferenceExists =
                    await loanReferenceRepository.countUniqueCustomerId(
                        validatedRequest.customer_id,
                    );

                if (loanReferenceExists !== 0) {
                    throw new BadRequestException(
                        'Nasabah ini sudah memiliki data referensi',
                    );
                }

                const monthly_surplus = getMonthlySurplus(
                    validatedRequest.monthly_income,
                    validatedRequest.monthly_expenses,
                );

                const installment = getInstallment(
                    validatedRequest.requested_loan_amount,
                    validatedRequest.loan_term,
                    1,
                );

                const validatedCalculatedLoanValues: CalculatedLoanValues =
                    validateSchema(calculatedLoanValues, {
                        monthly_surplus,
                        installment,
                    });

                const loanReference = await loanReferenceRepository.insert({
                    ...validatedRequest,
                    ...validatedCalculatedLoanValues,
                });

                const creditWorthinessStatus =
                    getCreditWorthiness(loanReference);
                await creditWorthinessService.create({
                    status: creditWorthinessStatus,
                    customer_id: loanReference.customer_id,
                    loan_reference_id: loanReference.id,
                });

                return loanReference;
            }),
        );

        return insertedReferences.length;
    },

    update: async (
        id: string,
        request: UpdateLoanReferenceRequest,
    ): Promise<LoanReference> => {
        await loanReferenceService.countExistsById(id);

        const loanReferenceExists =
            await loanReferenceRepository.countUniqueId(id);

        if (loanReferenceExists === 0) {
            throw new NotFoundException(
                `Loan reference with id : ${id} not found`,
            );
        }

        const validatedRequest: UpdateLoanReferenceRequest = validateSchema(
            updateLoanReferenceRequest,
            request,
        );

        const customer = await customerService.getById(
            validatedRequest.customer_id ?? '',
        );

        if (customer.guarantors.length === 0) {
            throw new BadRequestException('Customer must have a guarantor');
        }

        const monthly_surplus = getMonthlySurplus(
            validatedRequest.monthly_income ?? '',
            validatedRequest.monthly_expenses ?? '',
        );

        const installment = getInstallment(
            validatedRequest.requested_loan_amount ?? '',
            validatedRequest.loan_term ?? '',
            1,
        );

        const validatedCalculatedLoanValues: CalculatedLoanValues =
            validateSchema(calculatedLoanValues, {
                monthly_surplus,
                installment,
            });

        const loanReference = await loanReferenceRepository.update(id, {
            ...validatedRequest,
            ...validatedCalculatedLoanValues,
        });

        const creditWorthiness =
            await creditWorthinessService.getByLoanReferenceId(
                loanReference.id,
            );

        const creditWorthinessStatus = getCreditWorthiness(loanReference);

        await creditWorthinessService.update(creditWorthiness.id, {
            status: creditWorthinessStatus,
            customer_id: customer.id,
            loan_reference_id: loanReference.id,
        });

        return loanReference;
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await loanReferenceService.countExistsById(id);

        const loanReferenceExists =
            await loanReferenceRepository.countUniqueId(id);

        if (loanReferenceExists === 0) {
            throw new NotFoundException(
                `Loan reference with id : ${id} not found`,
            );
        }

        const transactionExists = await transactionRepository.findUniqueId(id);

        if (transactionExists) {
            if (
                transactionExists.transaction_status ===
                TransactionStatus.ACTIVE
            ) {
                throw new BadRequestException(
                    'This reference data is used for loan transaction reference',
                );
            }
        }

        await loanReferenceRepository.delete(id);

        return { id };
    },
};
