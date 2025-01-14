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
import type { TransactionWithRelations } from '../../types';
import { convertTransactionStatus } from '~/utils/convert-transaction-status';

type TransactionViewProps = {
    transaction?: TransactionWithRelations | null;
};

export const TransactionView = ({ transaction }: TransactionViewProps) => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle>Transaksi Pinjaman</CardTitle>
                <CardDescription>
                    Detail Informasi Transak Pinjaman
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {!transaction ? (
                        <div className="text-center text-gray-500">
                            Tidak ada transaksi nasabah yang tersedia.
                        </div>
                    ) : (
                        <div className="rounded-lg">
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                                <div className="space-y-2">
                                    <DetailCardItem
                                        label="status transaksi"
                                        content={convertTransactionStatus(
                                            transaction.transaction_status,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="total pinjaman"
                                        content={toIDR(
                                            transaction?.loan_amount,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="total bunga"
                                        content={toIDR(
                                            transaction?.interest_amount ?? 0,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="total keseluruhan"
                                        content={toIDR(
                                            transaction?.total_amount ?? 0,
                                        )}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <DetailCardItem
                                        label="angsuran pinjaman"
                                        content={toIDR(
                                            transaction?.loan_installment ?? 0,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="angsuran bunga"
                                        content={toIDR(
                                            transaction?.interest_installment ??
                                                0,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="total angsuran"
                                        content={toIDR(
                                            transaction?.total_installment ?? 0,
                                        )}
                                    />
                                    <DetailCardItem
                                        label="jangka waktu"
                                        content={`${transaction?.loan_term} bulan`}
                                    />
                                    <DetailCardItem
                                        label="transaksi berakhir pada"
                                        content={toFormatDate(
                                            transaction.end_transaction ??
                                                new Date(),
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="pt-10 xl:pt-5">
                                <div
                                    className={`w-full flex flex-col gap-y-5 md:flex-row justify-end gap-x-10 text-gray-500 text-sm ${transaction.customer && 'justify-between pt-10'}`}
                                >
                                    {transaction.customer && (
                                        <span className="capitalize w-full">
                                            Transaksi dari nasabah :{' '}
                                            {transaction.customer.name}
                                        </span>
                                    )}
                                    <div className="w-full flex flex-col md:flex-row gap-y-5 gap-x-10 justify-end">
                                        <span>
                                            Dibuat:{' '}
                                            {toFormatDate(
                                                transaction.created_at ??
                                                    new Date(),
                                            )}
                                        </span>
                                        <span>
                                            Diperbarui:{' '}
                                            {toFormatDate(
                                                transaction.updated_at ??
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
