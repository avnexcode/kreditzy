import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { DetailTransactionView } from '../components/view/DetailTransactionView';

type DashboardDetailTransactionPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export const DashboardDetailTransactionPage = async (
    props: DashboardDetailTransactionPageProps,
) => {
    const { id } = await props.params;

    return (
        <DashboardContainer
            title="Detail Transaksi"
            description="Detail transaksi nasabah beserta nama nasabah"
        >
            <DetailTransactionView id={id} />
        </DashboardContainer>
    );
};
