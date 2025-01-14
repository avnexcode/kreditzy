import { type Guarantor } from '@prisma/client';
import type {
    GuarantorWithCustomerRelationsResponse,
    GuarantorWithRelationsResponse,
} from './guarantor.model';

export const toGuarantorResponse = (guarantor: Guarantor): Guarantor => ({
    id: guarantor.id,
    name: guarantor.name,
    national_id: guarantor.national_id,
    id_card_address: guarantor.id_card_address,
    residential_address: guarantor.residential_address,
    occupation: guarantor.occupation,
    phone: guarantor.phone,
    relationship: guarantor.relationship,
    customer_id: guarantor.customer_id,
    created_at: guarantor.created_at,
    updated_at: guarantor.updated_at,
});

export const toGuarantorWithRelationsResponse = (
    guarantor: GuarantorWithRelationsResponse,
): GuarantorWithRelationsResponse => ({
    ...toGuarantorResponse(guarantor),
    customer: guarantor.customer,
});

export const toGuarantorWithCustomerRelationsResponse = (
    guarantor: GuarantorWithCustomerRelationsResponse,
): GuarantorWithCustomerRelationsResponse => ({
    ...toGuarantorResponse(guarantor),
    customer: guarantor.customer,
});
