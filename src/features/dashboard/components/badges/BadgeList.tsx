import { CreditworthinessBadge } from './CreditworthinessBadge';
import { CustomerBadge } from './CustomerBadge';
import { GuarantorBadge } from './GuarantorBadge';
import { LoanReferenceBadge } from './LoanReferenceBadge';
import { TransactionBadge } from './TransactionBadge';

export const BadgeList = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-y-12 gap-x-5">
            <CustomerBadge />
            <GuarantorBadge />
            <LoanReferenceBadge />
            <CreditworthinessBadge />
            <TransactionBadge />
        </div>
    );
};
