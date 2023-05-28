import { fetchGuildInfo } from "@/utils/discord";
import { Metadata } from "next";
import { ReactNode } from "react";

export default function GuildLayout({ children }: { children: ReactNode }) {
    return children;
}

export async function generateMetadata({
    params,
}: {
    params: { guild: string };
}): Promise<Metadata> {
    const info = await fetchGuildInfo(
        process.env.DISCORD_BOT_TOKEN!,
        params.guild,
        true
    );

    if (info == null) {
        return {
            title: "Guild",
        };
    }

    return {
        title: {
            default: info.name,
            absolute: `Dashboard | ${info.name}`,
            template: `%s | ${info.name}`,
        },
        description: "Customize your discord bot",
    };
}
