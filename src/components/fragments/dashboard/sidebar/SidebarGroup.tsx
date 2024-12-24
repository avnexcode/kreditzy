import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
} from '~/components/ui/sidebar';
import {
    KeyRound,
    LayoutDashboard,
    NotebookText,
    ShieldCheck,
    UserPen,
    Users,
} from 'lucide-react';
import { SidebarMenuList } from './SidebarMenuList';
import { renderElements } from '~/utils/render-elements';

export const SidebarGroupList = () => {
    const sidebarItems = [
        {
            group: 'application',
            list: [
                {
                    title: 'dashboard',
                    href: '/dashboard',
                    icon: <LayoutDashboard size={20} />,
                },
                {
                    title: 'customer',
                    href: '/dashboard/customer',
                    icon: <Users size={20} />,
                },
                {
                    title: 'penjamin',
                    href: '/dashboard/guarantor',
                    icon: <ShieldCheck size={20} />,
                },
                {
                    title: 'transaksi',
                    href: '/dashboard/transaction',
                    icon: <NotebookText size={20} />,
                },
            ],
        },
        {
            group: 'settings',
            list: [
                {
                    title: 'profile',
                    href: '/setting/profile',
                    icon: <UserPen size={20} />,
                },
                {
                    title: 'password',
                    href: '/setting/password',
                    icon: <KeyRound size={20} />,
                },
            ],
        },
    ];
    return (
        <>
            {renderElements({
                of: sidebarItems,
                render: (item, index) => (
                    <SidebarMenuList
                        key={index}
                        group={item.group}
                        sidebarList={item.list}
                    />
                ),
            })}
        </>
    );
};
