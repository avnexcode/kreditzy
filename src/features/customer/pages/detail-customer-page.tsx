import { DashboardContainer } from '~/components/layouts/DashboardContainer';

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
        <DashboardContainer title="Dashboard - Detail Customer" description="">
            {id}
        </DashboardContainer>
    );
};
