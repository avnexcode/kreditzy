import { CustomerBadge } from '../components/badge/CustomerBadge';
import { GuarantorBadge } from '../components/badge/GuarantorBadge';
import { TransactionBadge } from '../components/badge/TransactionBadge';
import { PageContainer } from '~/components/layouts/PageContainer';

export const DashboardPage = async () => {
    return (
        <PageContainer title="Dashboard" description="">
            <div className="flex gap-12 w-full flex-wrap justify-center">
                <TransactionBadge />
                <GuarantorBadge />
                <CustomerBadge />
            </div>
        </PageContainer>
    );
};
