import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { DetailView } from '../components/views/DetailView';

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
        <DashboardContainer title="Detail Nasabah" description="">
            <DetailView id={id} />
        </DashboardContainer>
    );
};
