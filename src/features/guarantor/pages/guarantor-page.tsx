import { PageContainer } from '~/components/layouts/PageContainer';
import { GuarantorTable } from '../components/table/GuarantorTable';

export const GuarantorPage = () => {
    return (
        <PageContainer title="Dashboard - Penjamin" description="">
            <GuarantorTable />
        </PageContainer>
    );
};
