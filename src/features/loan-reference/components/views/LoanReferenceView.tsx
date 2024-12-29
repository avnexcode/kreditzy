import { DetailCardItem } from '~/components/elements/DetailCardItem';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { toIDR } from '~/utils/convert-currency';
import { toFormatDate } from '~/utils/toFormatDate';
import type { LoanReferenceWithRelations } from '../../types';

type LoanReferenceViewProps = {
    loanReference?: LoanReferenceWithRelations | null;
};

export const LoanReferenceView = ({
    loanReference,
}: LoanReferenceViewProps) => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle>Referensi Pinjaman</CardTitle>
                <CardDescription>Detail Informasi Pinjaman</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {!loanReference ? (
                        <div className="text-center text-gray-500">
                            Tidak ada data referensi nasabah yang tersedia.
                        </div>
                    ) : (
                        <div className="rounded-lg">
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                                <div className="space-y-2">
                                    <DetailCardItem
                                        label="pendapatan bulanan"
                                        content={toIDR(
                                            loanReference?.monthly_income ?? 0,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="pengeluaran bulanan"
                                        content={toIDR(
                                            loanReference?.monthly_expenses ??
                                                0,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="sisa pendapatan"
                                        content={toIDR(
                                            loanReference?.monthly_surplus ?? 0,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="status pekerjaan"
                                        content={
                                            loanReference?.employment_status
                                                ? 'Tetap'
                                                : 'Tidak Tetap'
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <DetailCardItem
                                        label="riwayat kredit"
                                        content={
                                            loanReference?.previous_credit_history
                                                ? 'Baik'
                                                : 'Tidak Baik'
                                        }
                                    />
                                    <DetailCardItem
                                        label="estimasi jaminan"
                                        content={toIDR(
                                            loanReference?.collateral_estimate ??
                                                0,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="jumlah pinjaman"
                                        content={toIDR(
                                            loanReference?.requested_loan_amount ??
                                                0,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="jangka waktu"
                                        content={`${loanReference?.loan_term} bulan`}
                                    />
                                    <DetailCardItem
                                        label="cicilan"
                                        content={`${toIDR(
                                            loanReference?.installment ?? 0,
                                        )}/bulan`}
                                    />
                                </div>
                            </div>
                            <div className="pt-10 xl:pt-5">
                                <div
                                    className={`w-full flex flex-col gap-y-5 md:flex-row justify-end gap-x-10 text-gray-500 text-sm ${loanReference.customer && 'justify-between pt-10'}`}
                                >
                                    {loanReference.customer && (
                                        <span className="capitalize w-full">
                                            Penjamin dari nasabah :{' '}
                                            {loanReference.customer.name}
                                        </span>
                                    )}
                                    <div className="w-full flex flex-col md:flex-row gap-y-5 gap-x-10 justify-end">
                                        <span>
                                            Dibuat:{' '}
                                            {toFormatDate(
                                                loanReference.created_at ??
                                                    new Date(),
                                            )}
                                        </span>
                                        <span>
                                            Diperbarui:{' '}
                                            {toFormatDate(
                                                loanReference.updated_at ??
                                                    new Date(),
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
