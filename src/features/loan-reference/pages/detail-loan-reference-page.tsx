import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { H1 } from '~/components/elements/Heading';
import { LoanReferenceView } from '../components/views/LoanReferenceView';
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
            title="Dashboard - Detail Data Referensi"
            description=""
        >
            <LoanReferenceView loanReference={loanReference} />
        </DashboardContainer>
    );
};
