import { currentUser } from '~/lib/auth';
import { SidebarCustomTrigger } from './sidebar/SidebarCustomTrigger';

export const DashboardNavbar = async () => {
    const user = await currentUser();
    return (
        <nav className="w-full py-[0.85rem] px-5 flex justify-between items-center border-b border-zinc-200 sticky top-0 bg-white z-50">
            <div>
                <SidebarCustomTrigger />
            </div>
            <div>
                <h1 className="capitalize">Hello, {user?.name}</h1>
            </div>
        </nav>
    );
};
