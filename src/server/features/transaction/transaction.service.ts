import {
    BadRequestException,
    NotFoundException,
} from '~/server/helper/error.exception';
import { transactionRepository } from './transaction.repository';
import { toTransactionWithRelationResponse } from './transaction.response';
import {
    CreateTransactionRequest,
    LoanReferenceRequest,
    TransactionWithRelationsResponse,
    UpdateTransactionRequest,
} from './transaction.model';
import { Transaction, TransactionStatus } from '@prisma/client';
import { validateSchema } from '~/server/service/validation.service';
import {
    createTransactionRequest,
    loanReferenceRequest,
    updateTransactionRequest,
} from './transaction.validation';
import { loanReferenceService } from '../loan-reference/loan-reference.service';
import { creditWorthinessService } from '../credit-worthiness/credit-worthiness.service';
import { calculateDate } from '~/server/utils/calculate-date';

export const transactionService = {
    getAll: async (): Promise<TransactionWithRelationsResponse[]> => {
        const response = await transactionRepository.findMany();

        const transactions = response.map(transaction =>
            toTransactionWithRelationResponse(transaction),
        );

        return transactions;
    },

    getById: async (id: string): Promise<TransactionWithRelationsResponse> => {
        const transaction = await transactionRepository.findUniqueId(id);

        if (!transaction) {
            throw new NotFoundException(`Transaction with id ${id} not found`);
        }

        return toTransactionWithRelationResponse(transaction);
    },

    getByCustomerId: async (
        customer_id: string,
    ): Promise<TransactionWithRelationsResponse> => {
        const transaction =
            await transactionRepository.findUniqueCustomerId(customer_id);

        if (!transaction) {
            throw new NotFoundException(
                `Transaction with customer id ${customer_id} not found`,
            );
        }

        return toTransactionWithRelationResponse(transaction);
    },

    countAll: async (): Promise<number> => {
        const transactionCount = await transactionRepository.countMany();

        return transactionCount;
    },

    countById: async (id: string): Promise<number> => {
        const transactionCount = await transactionRepository.countUniqueId(id);

        return transactionCount;
    },

    countByCustomerId: async (customer_id: string): Promise<number> => {
        const transactionCount =
            await transactionRepository.countUniqueCustomerId(customer_id);

        return transactionCount;
    },

    create: async (request: CreateTransactionRequest): Promise<Transaction> => {
        const validatedRequest: CreateTransactionRequest = validateSchema(
            createTransactionRequest,
            request,
        );

        const transactionExists =
            await transactionRepository.countUniqueCustomerId(
                validatedRequest.customer_id,
            );

        if (transactionExists !== 0) {
            throw new BadRequestException(
                'This customer is currently in the loan period',
            );
        }

        const creditWorthiness = await creditWorthinessService.getByCustomerId(
            validatedRequest.customer_id,
        );

        if (!creditWorthiness.status) {
            throw new BadRequestException(
                'Customer does not have credit worthiness to make a transaction',
            );
        }

        const loanReference = await loanReferenceService.getByCustomerId(
            validatedRequest.customer_id,
        );

        const loanInstallment =
            Number(loanReference.requested_loan_amount) /
            loanReference.loan_term;

        const interestInstallment =
            Number(loanReference.installment) - loanInstallment;

        const totalAmount =
            Number(loanReference.installment) * loanReference.loan_term;

        const interestAmount =
            totalAmount - Number(loanReference.requested_loan_amount);

        const loanData = {
            loan_installment: String(loanInstallment),
            interest_installment: String(interestInstallment),
            total_installment: loanReference.installment,
            loan_amount: loanReference.requested_loan_amount,
            interest_amount: String(interestAmount),
            total_amount: String(totalAmount),
            loan_term: loanReference.loan_term,
            transaction_status: TransactionStatus.ACTIVE,
            end_transaction: calculateDate.endDate(
                new Date(),
                loanReference.loan_term,
            ),
        } as LoanReferenceRequest;

        const validatedLoanReference: LoanReferenceRequest = validateSchema(
            loanReferenceRequest,
            loanData,
        );

        const transaction = await transactionRepository.insert({
            ...validatedRequest,
            ...validatedLoanReference,
        });

        return transaction;
    },

    update: async (id: string, request: UpdateTransactionRequest) => {},

    delete: async (id: string) => {
        const transactionExists = await transactionRepository.countUniqueId(id);

        if (transactionExists === 0) {
            throw new NotFoundException(`Transaction with id ${id} not found`);
        }
        await transactionRepository.delete(id);

        return { id };
    },
};
