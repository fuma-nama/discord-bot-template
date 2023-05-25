import { prisma } from "@/utils/prisma";
import { Form } from "./form";
import { fetchGuildRoles } from "@/utils/discord";

export default async function MusicPage({
    params,
}: {
    params: { guild: string };
}) {
    const data = await prisma.musicFeature.findUnique({
        where: {
            guild_id: params.guild,
        },
    });

    const roles = await fetchGuildRoles(
        process.env.DISCORD_BOT_TOKEN!,
        params.guild
    );

    return (
        <>
            <h1 className="text-2xl font-bold">Music</h1>
            <p className="text-muted-foreground text-sm">
                Play any music in a voice channels
            </p>
            <Form guild={params.guild} roles={roles} data={data} />
        </>
    );
}
