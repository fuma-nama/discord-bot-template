"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";
import { z } from "zod";
import { checkPermissions } from "@/utils/actions/permissions";

const schema = z.object({
    channel: z.string().nullable(),
    message: z.string(),
});

export type Data = z.infer<typeof schema>;

export async function disable(guild: string) {
    await checkPermissions(guild);
    await prisma.welcomeFeature.deleteMany({
        where: {
            guild_id: guild,
        },
    });

    revalidatePage(guild);
}

export async function save(guild: string, raw: Data) {
    await checkPermissions(guild);
    const data = schema.parse(raw);

    await prisma.welcomeFeature.updateMany({
        data: {
            message: data.message,
            channel_id: data.channel,
        },
        where: {
            guild_id: guild,
        },
    });

    revalidatePage(guild);
}

function revalidatePage(guild: string) {
    revalidatePath(`/dashboard/${guild}/features/welcome-message`);
}
