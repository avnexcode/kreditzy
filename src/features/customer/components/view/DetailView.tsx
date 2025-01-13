import { getCustomerById } from '../../api/server/getCustomerById';
import { Separator } from '~/components/ui/separator';
import { GuarantorView } from '~/features/guarantor/components/view/GuarantorView';
import { CreditWorthinessView } from '~/features/credit-worthiness/components/view/CreditWorthinessView';
import { CustomerView } from './CustomerView';
import { LoanReferenceView } from '~/features/loan-reference/components/view/LoanReferenceView';
import type { GuarantorWithRelations } from '~/features/guarantor/types';
import type { LoanReferenceWithRelations } from '~/features/loan-reference/types';
import { TransactionView } from '~/features/transaction/components/view/TransactionView';
import { TransactionWithRelations } from '~/features/transaction/types';

type DetailViewProps = {
    id: string;
};

export const DetailView = async (props: DetailViewProps) => {
    const customer = await getCustomerById(props.id);

    return (
        <div className="space-y-6">
            <CustomerView customer={customer} />
            <Separator orientation="horizontal" />
            <GuarantorView
                guarantors={customer?.guarantors as GuarantorWithRelations[]}
            />
            <Separator orientation="horizontal" />
            <LoanReferenceView
                loanReference={
                    customer?.loan_reference as LoanReferenceWithRelations
                }
            />
            <Separator orientation="horizontal" />
            <CreditWorthinessView
                creditWorthiness={customer?.credit_worthiness}
            />
            <TransactionView
                transaction={customer.transaction as TransactionWithRelations}
            />
        </div>
    );
};
