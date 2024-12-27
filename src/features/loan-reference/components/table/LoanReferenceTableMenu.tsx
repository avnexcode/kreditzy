import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Ellipsis, Pencil, ScanEye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DeleteLoanReferenceDialog } from '../dialog/DeleteLoanReferenceDialog';

type LoanReferenceTableMenuProps = {
    id: string;
};

export const LoanReferenceTableMenu = (props: LoanReferenceTableMenuProps) => {
    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
                <Ellipsis size={20} strokeWidth={2} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="[&>*]:cursor-pointer">
                <DropdownMenuItem
                    onClick={() =>
                        router.push(
                            `/dashboard/loan-reference/${props.id}/detail`,
                        )
                    }
                >
                    <ScanEye />
                    Detail
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() =>
                        router.push(
                            `/dashboard/loan-reference/${props.id}/edit`,
                        )
                    }
                >
                    <Pencil />
                    Edit
                </DropdownMenuItem>
                <DeleteLoanReferenceDialog id={props.id} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
