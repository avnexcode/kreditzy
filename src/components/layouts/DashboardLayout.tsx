import { SidebarProvider } from '~/components/ui/sidebar';
import { DashboardSidebar } from '~/components/fragments/dashboard/sidebar/Sidebar';
import { DashboardNavbar } from '../fragments/dashboard/Navbar';
import { cookies } from 'next/headers';

type DashboardLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = async ({
    children,
    className,
}) => {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';
    return (
        <div className={`${className}`}>
            <SidebarProvider
                defaultOpen={defaultOpen}
                style={
                    {
                        '--sidebar-width': '15rem',
                        '--sidebar-width-mobile': '20rem',
                    } as React.CSSProperties
                }
            >
                <DashboardSidebar />
                <main className="w-full">
                    <DashboardNavbar />
                    <div className="p-5">{children}</div>
                </main>
            </SidebarProvider>
        </div>
    );
};
