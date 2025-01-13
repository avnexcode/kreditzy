import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { DetailView } from '../components/view/DetailView';

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
            <DetailView id={id} />
        </DashboardContainer>
    );
};
