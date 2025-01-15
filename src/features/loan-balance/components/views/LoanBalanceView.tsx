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
import type { LoanBalanceWithRelations } from '../../types';

type LoanBalanceViewProps = {
    loanBalance?: LoanBalanceWithRelations | null;
};

export const LoanBalanceView = ({ loanBalance }: LoanBalanceViewProps) => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle>Saldo Pinjaman</CardTitle>
                <CardDescription>
                    Detail Informasi Saldo Pinjaman
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {!loanBalance ? (
                        <div className="text-center text-gray-500">
                            Tidak ada saldo transaksi nasabah yang tersedia.
                        </div>
                    ) : (
                        <div className="rounded-lg">
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                                <div className="space-y-2">
                                    <DetailCardItem
                                        label="sisa pinjaman"
                                        content={toIDR(
                                            loanBalance.remaining_loan_amount,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="sisa bunga"
                                        content={toIDR(
                                            loanBalance.interest_due,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="sisa total"
                                        content={toIDR(
                                            loanBalance.remaining_total_amount,
                                        )}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <DetailCardItem
                                        label="total dibayar"
                                        content={toIDR(loanBalance.total_paid)}
                                    />
                                    <DetailCardItem
                                        label="pembayaran terakhir"
                                        content={toFormatDate(
                                            loanBalance.last_payment_date ??
                                                '-',
                                        )}
                                    />
                                    <DetailCardItem
                                        label="pembayaran terakhir"
                                        content={toFormatDate(
                                            loanBalance.next_due_date ?? '-',
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="pt-10 xl:pt-5">
                                <div
                                    className={`w-full flex flex-col gap-y-5 md:flex-row justify-end gap-x-10 text-gray-500 text-sm`}
                                >
                                    <div className="w-full flex flex-col md:flex-row gap-y-5 gap-x-10 justify-end">
                                        <span>
                                            Dibuat:{' '}
                                            {toFormatDate(
                                                loanBalance.created_at ??
                                                    new Date(),
                                            )}
                                        </span>
                                        <span>
                                            Diperbarui:{' '}
                                            {toFormatDate(
                                                loanBalance.updated_at ??
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
