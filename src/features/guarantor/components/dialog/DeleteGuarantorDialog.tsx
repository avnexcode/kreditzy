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
import { useDeleteGuarantor, useGuarantors } from '../../api/client';
type DeleteGuarantorDialogProps = {
    id: string;
    onClose: () => void;
};

export const DeleteGuarantorDialog = ({
    onClose,
    ...props
}: DeleteGuarantorDialogProps) => {
    const { toast } = useToast();
    const { refetch: refetchGuarantors } = useGuarantors();

    const { mutate: deleteGuarantor, isPending: isDeleteGuarantorPending } =
        useDeleteGuarantor({
            id: props.id,
            onSuccess: async () => {
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
                    description:
                        error.message ??
                        error.response?.data.error ??
                        'Terjadi kesalahan saat menghapus data',
                });
                onClose();
            },
        });

    const handleDelete = () => deleteGuarantor();

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
                        disabled={isDeleteGuarantorPending}
                        className="bg-red-500"
                    >
                        {isDeleteGuarantorPending ? (
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
