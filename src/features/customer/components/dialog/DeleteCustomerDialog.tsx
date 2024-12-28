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

type DeleteCustomerDialogProps = {
    id: string;
};

export const DeleteCustomerDialog = (props: DeleteCustomerDialogProps) => {
    const { toast } = useToast();
    const { refetch: refetchCustomers } = useCustomers();
    const { mutate: deleteCustomer, isPending: isDeleteCustomerPending } =
        useDeleteCustomer({
            id: props.id,
            onSuccess: async () => {
                await refetchCustomers();
                toast({
                    title: 'Success',
                    description: 'Berhasil menghapus data',
                });
            },
            onError: async error => {
                toast({
                    title: 'Error',
                    description:
                        error.message ??
                        error.response?.data.error ??
                        'Terjadi kesalahan saat menghapus data',
                });
            },
        });
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
                        onClick={() => deleteCustomer()}
                        disabled={isDeleteCustomerPending}
                        className="bg-red-500"
                    >
                        {isDeleteCustomerPending ? (
                            <>
                                <Loader2 className="animate-spin" />
                                Menghapus...
                            </>
                        ) : (
                            'Lanjutkan'
                        )}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
