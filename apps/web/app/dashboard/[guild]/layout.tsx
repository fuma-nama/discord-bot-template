import { ReactNode } from "react";
import { PageTabs } from "./tabs";
import { fetchGuildInfo, iconUrl } from "@/utils/discord";
import { Icon } from "@/components/ui/avatar";
import { InvitePanel } from "@/components/invite-panel";

export default async function GuildLayout({
    children,
    params,
}: {
    params: { guild: string };
    children: ReactNode;
}) {
    const guild = await fetchGuildInfo(process.env.TOKEN!, params.guild, true);

    if (guild == null) return <InvitePanel guild={params.guild} />;

    return (
        <>
            <div className="flex flex-row gap-4 items-center">
                <Icon
                    src={iconUrl(guild)}
                    fallback={guild.name}
                    className="w-12 h-12"
                />
                <div>
                    <h1 className="text-xl font-semibold">{guild.name}</h1>
                    <p className="text-sm text-muted-foreground">
                        {guild.approximate_member_count} Members
                    </p>
                </div>
            </div>
            <PageTabs />
            {children}
        </>
    );
}
