import { getCustomerById } from '../../api/server/getCustomerById';
import { Separator } from '~/components/ui/separator';
import { GuarantorView } from '~/features/guarantor/components/views/GuarantorView';
import { CreditWorthinessView } from '~/features/credit-worthiness/components/views/CreditWorthinessView';
import { CustomerView } from './CustomerView';
import { LoanReferenceView } from '~/features/loan-reference/components/views/LoanReferenceView';
import type { GuarantorWithRelations } from '~/features/guarantor/types';
import type { LoanReferenceWithRelations } from '~/features/loan-reference/types';

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
                    customer?.loan_references as LoanReferenceWithRelations
                }
            />
            <Separator orientation="horizontal" />
            <CreditWorthinessView
                creditWorthiness={customer?.credit_worthiness}
            />
        </div>
    );
};
