'use client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Ellipsis, Pencil, ScanEye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DeleteGuarantorDialog } from '../dialog/DeleteGuarantorDialog';

type GuarantorTableMenuProps = {
    id: string;
};

export const GuarantorTableMenu = (props: GuarantorTableMenuProps) => {
    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
                <Ellipsis size={20} strokeWidth={2} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="[&>*]:cursor-pointer">
                <DropdownMenuItem
                    onClick={() =>
                        router.push(`/dashboard/guarantor/${props.id}/detail`)
                    }
                >
                    <ScanEye />
                    Detail
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() =>
                        router.push(`/dashboard/guarantor/${props.id}/edit`)
                    }
                >
                    <Pencil />
                    Edit
                </DropdownMenuItem>
                <DeleteGuarantorDialog id={props.id} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
