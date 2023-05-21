"use server";
import { revalidatePath } from "next/cache";

export async function refresh(guild: string) {
    revalidatePath(`https://discord.com/api/v9/guilds/${guild}`);
}
