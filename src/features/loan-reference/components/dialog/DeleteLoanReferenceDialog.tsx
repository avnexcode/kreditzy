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
import { useDeleteLoanReference, useLoanReferences } from '../../api/client';

type DeleteLoanReferenceDialogProps = {
    id: string;
    onClose: () => void;
};

export const DeleteLoanReferenceDialog = ({
    onClose,
    ...props
}: DeleteLoanReferenceDialogProps) => {
    const { toast } = useToast();
    const { refetch: refetchLoanReferences } = useLoanReferences();
    const {
        mutate: deleteLoanReference,
        isPending: isDeleteLoanReferencePending,
    } = useDeleteLoanReference({
        id: props.id,
        onSuccess: async () => {
            await refetchLoanReferences();
            toast({
                title: 'Success',
                description: 'Berhasil menghapus data referensi',
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

    const handleDelete = () => deleteLoanReference();

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
                        disabled={isDeleteLoanReferencePending}
                        className="bg-red-500"
                    >
                        {isDeleteLoanReferencePending ? (
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
