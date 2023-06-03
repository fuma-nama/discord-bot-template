"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { checkPermissions } from "@/utils/actions/permissions";
import { db, eq, welcomeFeature } from "db";

const schema = z.object({
    channel: z.string().nullable(),
    message: z.string(),
});

export type Data = z.infer<typeof schema>;

export async function disable(guild: string) {
    await checkPermissions(guild);
    await db.delete(welcomeFeature).where(eq(welcomeFeature.guildId, guild));

    revalidatePage(guild);
}

export async function save(guild: string, raw: Data) {
    await checkPermissions(guild);
    const data = schema.parse(raw);

    await db
        .update(welcomeFeature)
        .set({
            message: data.message,
            channelId: data.channel,
        })
        .where(eq(welcomeFeature.guildId, guild));

    revalidatePage(guild);
}

function revalidatePage(guild: string) {
    revalidatePath(`/dashboard/${guild}/features/welcome-message`);
}
