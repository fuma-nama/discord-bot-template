"use server";

import { checkPermissions } from "@/utils/actions/permissions";
import { prisma } from "@/utils/prisma";
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

    await prisma.musicFeature.upsert({
        where: {
            guild_id: guild,
        },
        create: {
            guild_id: guild,
            controller_role: data.role,
        },
        update: {
            controller_role: data.role,
        },
    });

    revalidatePath(`/dashboard/${guild}/features/music`);
}
