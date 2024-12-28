'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenuButton, SidebarMenuItem } from '~/components/ui/sidebar';
import { cn } from '~/lib/utils'; // Make sure you have this utility

type SidebarItemProps = {
    sidebar: {
        title: string;
        href: string;
        icon: React.ReactNode;
    };
};

export const SidebarItem = (props: SidebarItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === props.sidebar.href;

    return (
        <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-zinc-200">
                <Link
                    href={props.sidebar.href}
                    className={cn(
                        'flex items-center gap-2 w-full',
                        isActive &&
                            'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50',
                    )}
                >
                    <span
                        className={`'shrink-0',
                            ${isActive && 'text-zinc-900 dark:text-zinc-50'}`}
                    >
                        {props.sidebar.icon}
                    </span>
                    <span className="capitalize">{props.sidebar.title}</span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
};
