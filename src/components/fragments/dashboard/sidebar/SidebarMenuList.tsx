import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
} from '~/components/ui/sidebar';
import { renderElements } from '~/utils/render-elements';
import { SidebarItem } from './SidebarItem';

type SidebarMenuListProps = {
    group: string;
    sidebarList: Array<{
        title: string;
        href: string;
        icon: React.ReactNode;
    }>;
};

export const SidebarMenuList = (props: SidebarMenuListProps) => {
    return (
        <SidebarGroup>
            <SidebarGroupContent className="space-y-2">
                <SidebarGroupLabel className="px-2 text-md font-semibold text-zinc-900 dark:text-zinc-50 capitalize">
                    {props.group}
                </SidebarGroupLabel>
                <SidebarMenu>
                    {renderElements({
                        of: props.sidebarList,
                        render: (item, index) => (
                            <SidebarItem key={index} sidebar={item} />
                        ),
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};
