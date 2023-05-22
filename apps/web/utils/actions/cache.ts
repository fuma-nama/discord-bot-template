"use server";
import { revalidatePath } from "next/cache";

export async function refreshGuild(guild: string) {
    revalidatePath(`https://discord.com/api/v9/guilds/${guild}`);
}
