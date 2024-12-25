import { CustomerBadge } from '../components/badge/CustomerBadge';
import { GuarantorBadge } from '../components/badge/GuarantorBadge';
import { TransactionBadge } from '../components/badge/TransactionBadge';
import { DashboardPageContainer } from '~/components/layouts/DashboardPageContainer';

export const DashboardPage = async () => {
    return (
        <DashboardPageContainer title="Dashboard" description="">
            <div className="flex gap-12 w-full flex-wrap justify-center">
                <TransactionBadge />
                <GuarantorBadge />
                <CustomerBadge />
            </div>
        </DashboardPageContainer>
    );
};
