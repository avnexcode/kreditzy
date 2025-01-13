import { z } from 'zod';

export const createTransactionRequest = z.object({
    customer_id: z.string(),
});

export const updateTransactionRequest = createTransactionRequest.partial();

export const loanReferenceRequest = z.object({
    loan_installment: z.string().min(1).max(100),
    interest_installment: z.string().min(1).max(100),
    total_installment: z.string().min(1).max(100),
    loan_term: z.number().int().positive(),
    loan_amount: z.string().min(1).max(100),
    interest_amount: z.string().min(1).max(100),
    total_amount: z.string().min(1).max(100),
    end_transaction: z
        .date()
        .min(
            new Date(),
            'Tanggal akhir transaksi harus lebih besar dari tanggal hari ini',
        )
        .refine(date => {
            const now = new Date();
            const maxDate = new Date();
            maxDate.setFullYear(now.getFullYear() + 5); // maksimal 5 tahun ke depan
            return date <= maxDate;
        }, 'Tanggal akhir transaksi tidak boleh lebih dari 5 tahun dari sekarang'),
});
