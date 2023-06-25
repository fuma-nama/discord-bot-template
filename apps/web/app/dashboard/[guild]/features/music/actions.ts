"use server";

import { db, eq, musicFeature } from "db";
import { checkPermissions } from "@/utils/actions/permissions";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z
    .object({
        role: z.string().nullable(),
    })
    .partial();

export type Data = z.infer<typeof schema>;

export async function save(guild: string, raw: Data) {
    await checkPermissions(guild);
    const data = schema.parse(raw);

    const res = await db
        .update(musicFeature)
        .set({
            controllerRole: data.role,
        })
        .where(eq(musicFeature.guildId, guild));

    if (res.rowCount === 0) {
        await db.insert(musicFeature).values({
            guildId: guild,
            controllerRole: data.role,
        });
    }

    revalidatePath(`/dashboard/${guild}/features/music`);
}
