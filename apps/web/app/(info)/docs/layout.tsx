import { ReactNode } from "react";
import { SidebarList, SidebarProvider } from "docs/components/layout/sidebar";
import { getPageTree } from "docs/utils/page-tree";
import clsx from "clsx";

export type Param = {
    slug?: string[];
};

export default function DocsLayout({ children }: { children: ReactNode }) {
    const tree = getPageTree();

    return (
        <SidebarProvider>
            <div
                className={clsx(
                    "grid grid-cols-1 gap-12 mx-auto w-full container min-h-screen",
                    "lg:grid-cols-[250px_auto] xl:grid-cols-[250px_auto_150px] 2xl:grid-cols-[250px_auto_150px]"
                )}
            >
                <SidebarList items={tree} />
                {children}
            </div>
        </SidebarProvider>
    );
}
