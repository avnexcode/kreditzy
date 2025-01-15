import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { DetailCustomerView } from '../components/view/DetailCustomerView';

type DashboardDetailCustomerPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export const DashboardDetailCustomerPage = async (
    props: DashboardDetailCustomerPageProps,
) => {
    const { id } = await props.params;

    return (
        <DashboardContainer
            title="Detail Nasabah"
            description="Detail data nasabah dan data - data lain yang berhubungan"
        >
            <DetailCustomerView id={id} />
        </DashboardContainer>
    );
};
