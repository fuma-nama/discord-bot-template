export const absolute_url: string =
    process.env.NEXT_PUBLIC_WEB_URL != null
        ? process.env.NEXT_PUBLIC_WEB_URL
        : process.env.VERCEL_URL != null
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT ?? 3000}`;

export const token_cookie = "token_cookie";

export const invite_url = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL!;
