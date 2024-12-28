'use client';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { useSidebar } from '~/components/ui/sidebar';

export const SidebarCustomTrigger = () => {
    const { toggleSidebar, open } = useSidebar();

    return (
        <button
            onClick={toggleSidebar}
            className="rounded-md transition-colors"
            aria-label={open ? 'Close sidebar' : 'Open sidebar'}
        >
            {open ? (
                <PanelLeftClose
                    size={30}
                    strokeWidth={1.5}
                    className="text-zinc-500 hover:text-zinc-600"
                />
            ) : (
                <PanelLeftOpen
                    size={30}
                    strokeWidth={1.5}
                    className="text-zinc-500 hover:text-zinc-600"
                />
            )}
        </button>
    );
};
