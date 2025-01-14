import { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Ellipsis, Pencil, ScanEye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DeleteCustomerDialog } from '../dialog/DeleteCustomerDialog';

type CustomerTableMenuProps = {
    id: string;
};

export const CustomerTableMenu = (props: CustomerTableMenuProps) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => setIsOpen(false);

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className="rounded-full">
                <Ellipsis size={20} strokeWidth={2} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="[&>*]:cursor-pointer">
                <DropdownMenuItem
                    onClick={() =>
                        router.push(`/dashboard/customer/${props.id}/detail`)
                    }
                >
                    <ScanEye />
                    Detail
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() =>
                        router.push(`/dashboard/customer/${props.id}/edit`)
                    }
                >
                    <Pencil />
                    Edit
                </DropdownMenuItem>
                <DeleteCustomerDialog id={props.id} onClose={handleOpen} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
