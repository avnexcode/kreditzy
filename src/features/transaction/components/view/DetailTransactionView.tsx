import { LoanBalanceView } from '~/features/loan-balance/components/views/LoanBalanceView';
import { getTransactionById } from '../../api/server';
import { TransactionView } from './TransactionView';
import { LoanBalanceWithRelations } from '~/features/loan-balance/types';

type DetailTransactionViewProps = {
    id: string;
};

export const DetailTransactionView = async (
    props: DetailTransactionViewProps,
) => {
    const transaction = await getTransactionById(props.id);

    return (
        <>
            <TransactionView transaction={transaction} />
            <LoanBalanceView
                loanBalance={
                    transaction.loan_balance as LoanBalanceWithRelations
                }
            />
        </>
    );
};
