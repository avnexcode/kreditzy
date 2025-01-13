'use client';
import { TableBody, TableCell, TableRow } from '~/components/ui/table';
import { TransactionTableMenu } from './TransactionTableMenu';
import { toIDR } from '~/utils/convert-currency';
import { useTransactions } from '../../api/client';
import { renderElements } from '~/utils/render-elements';
import { TransactionTableBodySkeleton } from '../skeleton/table/TransactionTableBodySkeleton';

export const TransactionTableBody = () => {
    const { data: transactions, isLoading: isTransactionsLoading } =
        useTransactions();

    if (isTransactionsLoading) {
        return <TransactionTableBodySkeleton />;
    }

    return (
        <TableBody>
            {transactions?.length === 0 && (
                <TableRow>
                    <TableCell
                        colSpan={7}
                        className="text-center text-lg h-24 text-muted-foreground text-zinc-900"
                    >
                        Tidak ada transaksi nasabah.
                    </TableCell>
                </TableRow>
            )}
            {renderElements({
                of: transactions,
                render: (transaction, index) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{transaction.customer.name}</TableCell>
                        <TableCell>
                            {toIDR(transaction.total_installment)}
                        </TableCell>
                        <TableCell>{transaction.loan_term} Bulan</TableCell>
                        <TableCell>{toIDR(transaction.total_amount)}</TableCell>
                        <TableCell>
                            <TransactionTableMenu id={transaction.id} />
                        </TableCell>
                    </TableRow>
                ),
            })}
        </TableBody>
    );
};
