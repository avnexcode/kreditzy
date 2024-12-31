import { useToast } from '~/hooks/use-toast';
import { CreateLoanReferenceFormInner } from './CreateLoanReferenceFormInner';
import type { CreateLoanReferenceFormSchema } from '../../types';
import { useCreateLoanReference, useLoanReferences } from '../../api/client';

type CreateLoanReferenceFormProps = {
    setIsOpen: (isOpen: boolean) => void;
    setIsPending: (isPending: boolean) => void;
};

export const CreateLoanReferenceForm = ({
    setIsOpen,
    setIsPending,
}: CreateLoanReferenceFormProps) => {
    const { refetch: refetchLoanReference } = useLoanReferences();
    const { toast } = useToast();

    const {
        mutate: createLoanReference,
        isPending: isCreateLoanReferencePending,
    } = useCreateLoanReference({
        onMutate: async () => {
            setIsPending(isCreateLoanReferencePending);
        },
        onSuccess: async () => {
            await refetchLoanReference();
            setIsOpen(false);
            toast({
                title: 'Success',
                description: 'Berhasil menambahkan data referensi nasabah',
            });
        },
        onError: async error => {
            setIsOpen(false);
            toast({
                title: 'Error',
                variant: 'destructive',
                description:
                    error.response?.data.error ??
                    error.message ??
                    'Invalid input',
            });
        },
    });

    const onSubmit = (values: CreateLoanReferenceFormSchema) =>
        createLoanReference(values);
    return (
        <CreateLoanReferenceFormInner
            form_id="create-loan-reference-form"
            onSubmit={onSubmit}
        />
    );
};
