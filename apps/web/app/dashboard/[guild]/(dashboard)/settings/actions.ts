"use server";

import { prisma } from "@/utils/prisma";
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

    await prisma.settings.upsert({
        where: {
            guild_id: guild,
        },
        create: {
            guild_id: guild,
            prefix: data.prefix,
        },
        update: {
            prefix: data.prefix,
        },
    });

    revalidatePath(`/dashboard/${guild}/settings`);
}
