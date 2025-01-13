import { type CreditWorthiness } from '@prisma/client';
import type { CreditWorthinessWithRelationsResponse } from './credit-worthiness.model';

export const toCreditWorthinessResponse = (
    creditWorthiness: CreditWorthiness,
): CreditWorthiness => ({
    id: creditWorthiness.id,
    status: creditWorthiness.status,
    customer_id: creditWorthiness.customer_id,
    loan_reference_id: creditWorthiness.loan_reference_id,
    created_at: creditWorthiness.created_at,
    updated_at: creditWorthiness.updated_at,
});

export const toCreditWorthinessWithRelationsResponse = (
    creditWorthiness: CreditWorthinessWithRelationsResponse,
): CreditWorthinessWithRelationsResponse => ({
    ...toCreditWorthinessResponse(creditWorthiness),
    customer: creditWorthiness.customer,
    loan_reference: creditWorthiness.loan_reference,
});
