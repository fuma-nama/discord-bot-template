import { prisma } from "@/utils/prisma";
import { SettingsForm } from "./form";

/**
 * Example settings page
 */
export default async function SettingsPage({
    params,
}: {
    params: { guild: string };
}) {
    const settings = await prisma.settings.upsert({
        create: {
            guild_id: params.guild,
        },
        update: {},
        where: {
            guild_id: params.guild,
        },
    });

    return <SettingsForm guild={params.guild} data={settings} />;
}
