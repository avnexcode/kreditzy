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
};

export const DeleteGuarantorDialog = (props: DeleteGuarantorDialogProps) => {
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
                        onClick={() => deleteGuarantor()}
                        disabled={isDeleteGuarantorPending}
                        className="bg-red-500"
                    >
                        {isDeleteGuarantorPending ? (
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
