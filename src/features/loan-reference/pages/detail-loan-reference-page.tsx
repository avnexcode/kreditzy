import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { LoanReferenceView } from '../components/view/LoanReferenceView';
import { getLoanReferenceById } from '../api/server/getLoanReferenceById';

type DashboardDetailLoanReferencePageProps = {
    params: Promise<{
        id: string;
    }>;
};

export const DashboardDetailLoanReferencePage = async (
    props: DashboardDetailLoanReferencePageProps,
) => {
    const { id } = await props.params;
    const loanReference = await getLoanReferenceById(id);

    return (
        <DashboardContainer
            title="Detail Data Referensi"
            description="Detail data referensi nasabah beserta nama nasabah"
        >
            <LoanReferenceView loanReference={loanReference} />
        </DashboardContainer>
    );
};
