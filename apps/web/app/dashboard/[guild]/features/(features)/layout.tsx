import features from "@/data/features";
import { ReactNode } from "react";
import { SidebarItem } from "./item";
import Link from "next/link";

export default function FeatureLayout({
    params,
    children,
}: {
    params: { guild: string };
    children: ReactNode;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[200px_auto] flex-1">
            <aside className="flex flex-col gap-4 border-r-[1px] py-4 max-md:hidden">
                <Link
                    href={`/dashboard/${params.guild}/features`}
                    className="text-sm"
                >{`<- Back`}</Link>
                {features.map((feature) => (
                    <SidebarItem
                        key={feature.href}
                        href={`/dashboard/${params.guild}/features/${feature.href}`}
                    >
                        {feature.title}
                    </SidebarItem>
                ))}
            </aside>
            <div className="md:p-4 flex flex-col gap-4">
                <Link
                    href={`/dashboard/${params.guild}/features`}
                    className="text-sm md:hidden"
                >{`<- Back`}</Link>
                {children}
            </div>
        </div>
    );
}
