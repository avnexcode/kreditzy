'use client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Ellipsis, Pencil, ScanEye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DeleteTransactionDialog } from '../dialog/DeleteTransactionDialog';
import { useState } from 'react';

type TransactionTableMenuProps = {
    id: string;
};

export const TransactionTableMenu = (props: TransactionTableMenuProps) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => () => setIsOpen(false);

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className="rounded-full">
                <Ellipsis size={20} strokeWidth={2} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="[&>*]:cursor-pointer">
                <DropdownMenuItem
                    onClick={() =>
                        router.push(`/dashboard/transaction/${props.id}/detail`)
                    }
                >
                    <ScanEye />
                    Detail
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() =>
                        router.push(`/dashboard/transaction/${props.id}/edit`)
                    }
                >
                    <Pencil />
                    Edit
                </DropdownMenuItem>
                <DeleteTransactionDialog id={props.id} onClose={handleOpen} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
