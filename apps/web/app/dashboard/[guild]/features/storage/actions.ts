"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";
import { z } from "zod";
import { checkPermissions } from "@/utils/actions/permissions";

const schema = z.object({
    message: z.string(),
});

export type Data = z.infer<typeof schema>;

export async function insert(guild: string, raw: Data) {
    await checkPermissions(guild);

    const data = schema.parse(raw);
    await prisma.test.create({
        data: {
            guild_id: guild,
            value: data.message,
        },
    });

    revalidatePage(guild);
}

export async function deleteItem(guild: string, id: number) {
    await checkPermissions(guild);

    await prisma.test.deleteMany({
        where: {
            guild_id: guild,
            id: id,
        },
    });

    revalidatePage(guild);
}

function revalidatePage(guild: string) {
    revalidatePath(`/dashboard/${guild}/features/storage`);
}
