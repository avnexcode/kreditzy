import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { GuarantorCard } from '../components/Card/GuarantorCard';
import { getGuarantorById } from '../api/server';

type DashboardDetailGuarantorPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export const DashboardDetailGuarantorPage = async (
    props: DashboardDetailGuarantorPageProps,
) => {
    const { id } = await props.params;
    const guarantor = await getGuarantorById(id);
    return (
        <DashboardContainer
            title="Dashboard - Detail Penjamin Nasabah"
            description=""
        >
            <GuarantorCard guarantor={guarantor} />
        </DashboardContainer>
    );
};
