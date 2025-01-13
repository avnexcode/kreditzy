import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { TransactionView } from '../components/view/TransactionView';
import { getTransactionById } from '../api/server';

type DashboardDetailTransactionPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export const DashboardDetailTransactionPage = async (
    props: DashboardDetailTransactionPageProps,
) => {
    const { id } = await props.params;
    const transaction = await getTransactionById(id);

    return (
        <DashboardContainer
            title="Detail Transaksi"
            description="Detail transaksi nasabah beserta nama nasabah"
        >
            <TransactionView transaction={transaction} />
        </DashboardContainer>
    );
};
