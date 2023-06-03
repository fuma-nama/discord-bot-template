"use server";

import { db, eq, settings } from "db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z
    .object({
        prefix: z.string().length(1),
    })
    .partial();

export type Data = z.infer<typeof schema>;

export async function updateSettings(guild: string, raw: Data) {
    const data = schema.parse(raw);
    const res = await db
        .update(settings)
        .set({
            prefix: data.prefix,
        })
        .where(eq(settings.guildId, guild));

    if (res.rowCount === 0) {
        await db.insert(settings).values({
            guildId: guild,
            prefix: data.prefix,
        });
    }

    revalidatePath(`/dashboard/${guild}/settings`);
}
