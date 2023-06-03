"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { checkPermissions } from "@/utils/actions/permissions";
import { and, db, eq, test } from "db";

const schema = z.object({
    message: z.string(),
});

export type Data = z.infer<typeof schema>;

export async function insert(guild: string, raw: Data) {
    await checkPermissions(guild);

    const data = schema.parse(raw);

    await db.insert(test).values({
        guildId: guild,
        value: data.message,
    });

    revalidatePage(guild);
}

export async function deleteItem(guild: string, id: number) {
    await checkPermissions(guild);

    await db.delete(test).where(and(eq(test.guildId, guild), eq(test.id, id)));

    revalidatePage(guild);
}

function revalidatePage(guild: string) {
    revalidatePath(`/dashboard/${guild}/features/storage`);
}
