import { Guild, UserInfo } from "./discord";

export const absolute_url: string =
    process.env.NEXT_PUBLIC_WEB_URL != null
        ? process.env.NEXT_PUBLIC_WEB_URL
        : process.env.VERCEL_URL != null
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT ?? 3000}`;

export const token_cookie = "token_cookie";

export const invite_url = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL!;
export const discord_url = "https://discord.gg/QmgmFhg";
export const github_url = "https://github.com/SonMooSans/discord-bot-template";

export function iconUrl(guild: Guild, size: number = 512) {
    return guild.icon != null
        ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}?size=${size}`
        : null;
}

export function avatarUrl(user: UserInfo, size: number = 512) {
    return user.avatar != null
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?size=${size}`
        : null;
}

export function bannerUrl(
    id: string,
    banner: string,
    size: number = 1024
): string {
    return `https://cdn.discordapp.com/banners/${id}/${banner}?size=${size}`;
}
