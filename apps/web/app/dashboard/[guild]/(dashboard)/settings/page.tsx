import { db, eq, settings } from "db";
import { SettingsForm } from "./form";
import { notFound } from "next/navigation";
/**
 * Example settings page
 */
export default async function SettingsPage({
    params,
}: {
    params: { guild: string };
}) {
    let data = await db
        .select()
        .from(settings)
        .where(eq(settings.guildId, params.guild));

    if (data.length === 0) {
        await db.insert(settings).values({
            guildId: params.guild,
        });

        data = await db
            .select()
            .from(settings)
            .where(eq(settings.guildId, params.guild));
    }

    if (data[0] == null) {
        notFound();
    }

    return <SettingsForm guild={params.guild} data={data[0]} />;
}
