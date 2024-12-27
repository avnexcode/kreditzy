import { type Prisma } from '@prisma/client';
import { z } from 'zod';

export const createLoanReferenceFormSchema = z.object({
    monthly_income: z
        .string()
        .min(1, 'Pendapatan bulanan wajib diisi')
        .max(100, 'Pendapatan bulanan maksimal 100 karakter'),
    monthly_expenses: z
        .string()
        .min(1, 'Pengeluaran bulanan wajib diisi')
        .max(100, 'Pengeluaran bulanan maksimal 100 karakter'),
    employment_status: z.boolean({
        required_error: 'Status pekerjaan wajib diisi',
        invalid_type_error: 'Status pekerjaan harus berupa boolean',
    }),
    previous_credit_history: z.boolean({
        required_error: 'Riwayat kredit wajib diisi',
        invalid_type_error: 'Riwayat kredit harus berupa boolean',
    }),
    requested_loan_amount: z
        .string()
        .min(1, 'Jumlah pinjaman wajib diisi')
        .max(100, 'Jumlah pinjaman maksimal 100 karakter'),
    collateral_estimate: z
        .string()
        .min(1, 'Taksiran jaminan wajib diisi')
        .max(100, 'Taksiran jaminan maksimal 100 karakter'),
    loan_term: z
        .number()
        .min(1, 'Jangka waktu pinjaman minimal 1 bulan')
        .int('Jangka waktu harus berupa bilangan bulat')
        .positive('Jangka waktu harus positif'),
    customer_id: z.string().min(1, 'ID nasabah wajib diisi'),
});

export const updateLoanReferenceFormSchema = createLoanReferenceFormSchema;

export type CreateLoanReferenceFormSchema = z.infer<
    typeof createLoanReferenceFormSchema
>;

export type UpdateLoanReferenceFormSchema = z.infer<
    typeof updateLoanReferenceFormSchema
>;

export type LoanReferenceWithRelations = Prisma.LoanReferenceGetPayload<{
    include: {
        customer: true;
    };
}>;
