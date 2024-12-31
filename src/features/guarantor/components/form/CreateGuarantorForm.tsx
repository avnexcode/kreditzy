import { useToast } from '~/hooks/use-toast';
import type { CreateGuarantorFormSchema } from '../../types';
import { CreateGuarantorFormInner } from './CreateGuarantorFormInner';
import { useCreateGuarantor, useGuarantors } from '../../api/client';

type CreateGuarantorFormProps = {
    setIsOpen: (isOpen: boolean) => void;
    setIsPending: (isPending: boolean) => void;
};

export const CreateGuarantorForm = ({
    setIsOpen,
    setIsPending,
}: CreateGuarantorFormProps) => {
    const { refetch: refetchGuarantors } = useGuarantors();
    const { toast } = useToast();

    const { mutate: createGuarantor, isPending: isCreateGuarantorPending } =
        useCreateGuarantor({
            onMutate: async () => {
                setIsPending(isCreateGuarantorPending);
            },
            onSuccess: async () => {
                await refetchGuarantors();
                setIsOpen(false);
                toast({
                    title: 'Success',
                    description: 'Berhasil menambahkan data nasabah',
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

    const onSubmit = (values: CreateGuarantorFormSchema) =>
        createGuarantor(values);

    return (
        <CreateGuarantorFormInner
            form_id="create-guarantor-form"
            onSubmit={onSubmit}
        />
    );
};
