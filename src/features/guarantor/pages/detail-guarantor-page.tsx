import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { GuarantorCard } from '../components/GuarantorCard';
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
            title="Detail Penjamin Nasabah"
            description="Detail data penjamin nasabah beserta nama nasabah yang dijmain"
        >
            <GuarantorCard guarantor={guarantor} />
        </DashboardContainer>
    );
};
