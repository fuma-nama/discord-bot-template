import { db, eq, musicFeature } from "db";
import { Form } from "./form";
import { fetchGuildRoles } from "@/utils/discord";

export default async function MusicPage({
    params,
}: {
    params: { guild: string };
}) {
    const data = await db
        .select()
        .from(musicFeature)
        .where(eq(musicFeature.guildId, params.guild))
        .then((res) => res[0]);

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
