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
import { useDeleteTransaction, useTransactions } from '../../api/client';

type DeleteTransactionDialogProps = {
    id: string;
    onClose: () => void;
};

export const DeleteTransactionDialog = ({
    onClose,
    ...props
}: DeleteTransactionDialogProps) => {
    const { toast } = useToast();
    const { refetch: refetchTransactions } = useTransactions();
    const { mutate: deleteTransaction, isPending: isDeleteTransactionPending } =
        useDeleteTransaction({
            id: props.id,
            onSuccess: async () => {
                await refetchTransactions();
                toast({
                    title: 'Success',
                    description: 'Berhasil menghapus data transaksi',
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

    const handleDelete = () => deleteTransaction();

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
                        disabled={isDeleteTransactionPending}
                        className="bg-red-500"
                    >
                        {isDeleteTransactionPending ? (
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
