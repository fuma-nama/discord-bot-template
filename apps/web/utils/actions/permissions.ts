import { session } from "../auth/server";
import { PermissionFlags, fetchGuilds } from "../discord";

export async function checkPermissions(guild: string) {
    "use server";
    const guilds = await fetchGuilds(session());
    const info = guilds.find((v) => v.id === guild);

    if (info == null) throw new Error("You hadn't joined the guild yet");

    const hasPermissions =
        BigInt(info.permissions) & BigInt(PermissionFlags.ADMINISTRATOR);

    if (!hasPermissions) {
        throw new Error("Missing permissions");
    }
}
