import { ReactNode } from "react";
import { fetchGuildInfo } from "@/utils/discord";
import { iconUrl } from "@/utils/shared";
import { InvitePanel } from "@/components/invite-panel";
import { PageTabs } from "./tabs";
import { Icon } from "ui/components/avatar";

export default async function GuildLayout({
    children,
    params,
}: {
    params: { guild: string };
    children: ReactNode;
}) {
    const guild = await fetchGuildInfo(
        process.env.DISCORD_BOT_TOKEN!,
        params.guild,
        true
    );

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
