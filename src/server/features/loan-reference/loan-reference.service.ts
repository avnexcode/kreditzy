import { type LoanReference } from '@prisma/client';
import { loanReferenceRepository } from './loan-reference.repository';
import { toLoanReferenceWithRelationsResponse } from './loan-reference.response';
import { validateSchema } from '~/server/service/validation.service';
import { NotFoundException } from '~/server/helper/error.exception';
import { getInstallment, getMonthlySurplus } from '~/server/utils/decision';
import {
    calculatedLoanValues,
    createLoanReferenceRequest,
    updateLoanReferenceRequest,
} from './loan-reference.validation';
import type {
    CalculatedLoanValues,
    CreateLoanReferenceRequest,
    LoanReferenceWithRelations,
    UpdateLoanReferenceRequest,
} from './loan-reference.model';

export const loanReferenceService = {
    getAll: async (): Promise<LoanReferenceWithRelations[]> => {
        const response = await loanReferenceRepository.findMany();

        const loanReferences = response.map(loanReference =>
            toLoanReferenceWithRelationsResponse(loanReference),
        );

        return loanReferences;
    },

    getById: async (id: string): Promise<LoanReferenceWithRelations> => {
        const loanReference = await loanReferenceRepository.findUniqueId(id);

        if (!loanReference) {
            throw new NotFoundException(
                `Not found loan reference with id = ${id}.`,
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

    create: async (
        request: CreateLoanReferenceRequest,
    ): Promise<LoanReference> => {
        const validatedRequest: CreateLoanReferenceRequest = validateSchema(
            createLoanReferenceRequest,
            request,
        );
        const monthly_surplus = String(
            getMonthlySurplus(
                Number(validatedRequest.monthly_income),
                Number(validatedRequest.monthly_expenses),
            ),
        );

        const installment = String(
            getInstallment(
                Number(validatedRequest.requested_loan_amount),
                Number(validatedRequest.loan_term),
                1,
            ),
        );

        const validatedCalculatedLoanValues: CalculatedLoanValues =
            validateSchema(calculatedLoanValues, {
                monthly_surplus,
                installment,
            });

        const loanReference = await loanReferenceRepository.insertOnce({
            ...validatedRequest,
            ...validatedCalculatedLoanValues,
        });

        return loanReference;
    },

    update: async (
        id: string,
        request: UpdateLoanReferenceRequest,
    ): Promise<LoanReference> => {
        const loanReferenceExists =
            await loanReferenceRepository.countUniqueId(id);

        if (loanReferenceExists === 0) {
            throw new NotFoundException(
                `Not found loan reference with id = ${id}.`,
            );
        }

        const validatedRequest: UpdateLoanReferenceRequest = validateSchema(
            updateLoanReferenceRequest,
            request,
        );

        const monthly_surplus = String(
            getMonthlySurplus(
                Number(validatedRequest.monthly_income),
                Number(validatedRequest.monthly_expenses),
            ),
        );

        const installment = String(
            getInstallment(
                Number(validatedRequest.requested_loan_amount),
                Number(validatedRequest.loan_term),
                1,
            ),
        );

        const validatedCalculatedLoanValues: CalculatedLoanValues =
            validateSchema(calculatedLoanValues, {
                monthly_surplus,
                installment,
            });

        const loanReference = await loanReferenceRepository.updateOnce(id, {
            ...validatedRequest,
            ...validatedCalculatedLoanValues,
        });

        return loanReference;
    },

    delete: async (id: string): Promise<{ id: string }> => {
        const loanReferenceExists =
            await loanReferenceRepository.countUniqueId(id);

        if (loanReferenceExists === 0) {
            throw new NotFoundException(
                `Not found loan reference with id = ${id}.`,
            );
        }

        await loanReferenceRepository.deleteOnce(id);

        return { id };
    },
};
