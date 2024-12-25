import { DashboardPageContainer } from '~/components/layouts/DashboardPageContainer';

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
        <DashboardPageContainer
            title="Dashboard - Detail Customer"
            description=""
        >
            {id}
        </DashboardPageContainer>
    );
};
