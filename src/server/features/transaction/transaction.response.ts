import { Transaction } from '@prisma/client';
import { TransactionWithRelationsResponse } from './transaction.model';

export const toTransactionResponse = (
    transaction: Transaction,
): Transaction => ({
    id: transaction.id,
    loan_installment: transaction.loan_installment,
    interest_installment: transaction.interest_installment,
    total_installment: transaction.total_installment,
    loan_amount: transaction.loan_amount,
    interest_amount: transaction.interest_amount,
    total_amount: transaction.total_amount,
    loan_term: transaction.loan_term,
    end_transaction: transaction.end_transaction,
    transaction_status: transaction.transaction_status,
    loan_reference_id: transaction.loan_reference_id,
    customer_id: transaction.customer_id,
    created_at: transaction.created_at,
    updated_at: transaction.updated_at,
});

export const toTransactionWithRelationResponse = (
    transaction: TransactionWithRelationsResponse,
): TransactionWithRelationsResponse => ({
    ...toTransactionResponse(transaction),
    customer: transaction.customer,
    payment_records: transaction.payment_records,
    loan_balance: transaction.loan_balance,
});
