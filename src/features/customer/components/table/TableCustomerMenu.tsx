import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Ellipsis, Pencil, ScanEye, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

type CustomerTableMenuProps = {
    id: string;
};

export const TableCustomerMenu = (props: CustomerTableMenuProps) => {
    const router = useRouter();
    return (
        <DropdownMenu>
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
                <DropdownMenuItem>
                    <Trash2 />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
