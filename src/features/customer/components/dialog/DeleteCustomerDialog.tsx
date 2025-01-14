import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import { DropdownMenuItem } from '~/components/ui/dropdown-menu';
import { Loader2, Trash2 } from 'lucide-react';
import { useToast } from '~/hooks/use-toast';
import { useCustomers, useDeleteCustomer } from '../../api/client';
import { useGuarantors } from '~/features/guarantor/api/client';

type DeleteCustomerDialogProps = {
    id: string;
    onClose: () => void;
};

export const DeleteCustomerDialog = ({
    onClose,
    ...props
}: DeleteCustomerDialogProps) => {
    const { toast } = useToast();
    const { refetch: refetchCustomers } = useCustomers();
    const { refetch: refetchGuarantors } = useGuarantors();
    const { mutate: deleteCustomer, isPending: isDeleteCustomerPending } =
        useDeleteCustomer({
            id: props.id,
            onSuccess: async () => {
                await refetchCustomers();
                await refetchGuarantors();
                toast({
                    title: 'Success',
                    description: 'Berhasil menghapus data',
                });
                onClose();
            },
            onError: async error => {
                toast({
                    title: 'Error',
                    variant: 'destructive',
                    description:
                        error.response?.data.error ??
                        error.message ??
                        'Terjadi kesalahan saat menghapus data',
                });
                onClose();
            },
        });

    const handleDelete = () => deleteCustomer();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={e => e.preventDefault()}>
                    <Trash2 />
                    Delete
                </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Apakah anda yakin?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Tindakan ini tidak dapat dibatalkan. Ini akan secara
                        permanen menghapus data anda dan menghapus data anda
                        dari server kami.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleDelete}
                        disabled={isDeleteCustomerPending}
                        className="bg-red-500"
                    >
                        {isDeleteCustomerPending ? (
                            <>
                                <Loader2 className="animate-spin" />
                                Deleting...
                            </>
                        ) : (
                            'Delete'
                        )}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
