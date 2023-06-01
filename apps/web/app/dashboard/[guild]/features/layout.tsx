import features from "@/data/features";
import { ReactNode } from "react";
import { SidebarItem } from "./item";
import Link from "next/link";
import { fetchGuildInfo } from "@/utils/discord";
import { iconUrl } from "@/utils/shared";
import { notFound } from "next/navigation";
import { Icon } from "ui/components/avatar";

/**
 * Feature configuration Layout
 */
export default function FeatureLayout({
    params,
    children,
}: {
    params: { guild: string };
    children: ReactNode;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[280px_auto] flex-1">
            <aside className="flex flex-col gap-4 border-r-[1px] py-4 max-md:hidden">
                <Link
                    href={`/dashboard/${params.guild}/features`}
                    className="text-sm"
                >{`<- Back`}</Link>
                {/* @ts-expect-error Server Component */}
                <GuildInfo guild={params.guild} />
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <SidebarItem
                            key={feature.href}
                            href={`/dashboard/${params.guild}/features/${feature.href}`}
                        >
                            <div className="border-[1px] rounded-lg p-1 shadow-md">
                                <Icon className="w-4 h-4" />
                            </div>
                            {feature.title}
                        </SidebarItem>
                    );
                })}
            </aside>
            <div className="md:px-8 md:py-4 flex flex-col gap-4">
                <Link
                    href={`/dashboard/${params.guild}/features`}
                    className="text-sm md:hidden"
                >{`<- Back`}</Link>
                {children}
            </div>
        </div>
    );
}

async function GuildInfo({ guild }: { guild: string }) {
    const info = await fetchGuildInfo(
        process.env.DISCORD_BOT_TOKEN!,
        guild,
        true
    );

    if (info == null) {
        notFound();
    }

    return (
        <div className="flex flex-row gap-2 p-2 mr-8 rounded-lg bg-secondary text-secondary-foreground">
            <Icon
                src={iconUrl(info)}
                fallback={info.name}
                className="w-8 h-8"
            />
            <div className="flex-1 w-0">
                <p className="text-sm font-medium whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {info.name}
                </p>
                <p className="text-xs text-muted-foreground">
                    {info.approximate_member_count} Members
                </p>
            </div>
        </div>
    );
}
