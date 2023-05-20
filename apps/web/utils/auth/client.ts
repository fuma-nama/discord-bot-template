import { absolute_url } from "../shared";

export function getLoginUrl() {
    const params = new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID!,
        redirect_uri: absolute_url + "/api/auth/callback",
        response_type: "code",
        scope: ["identify", "guilds"].join(" "),
    });

    return `https://discord.com/api/oauth2/authorize?${params.toString()}`;
}
