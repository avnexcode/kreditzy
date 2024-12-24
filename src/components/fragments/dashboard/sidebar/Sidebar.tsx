import Link from 'next/link';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from '~/components/ui/sidebar';
import { SignOutButton } from '../SignOutButton';
import { SidebarGroupList } from './SidebarGroup';

export const DashboardSidebar = () => {
    return (
        <Sidebar className="min-h-screen border-r border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/50">
            <SidebarHeader className="border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
                <Link
                    href={'/'}
                    className="text-2xl font-bold text-zinc-900 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
                >
                    KrediTzy
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroupList />
            </SidebarContent>
            <SidebarFooter className="border-t border-zinc-200 px-6 py-4 dark:border-zinc-800">
                <SignOutButton />
            </SidebarFooter>
        </Sidebar>
    );
};
