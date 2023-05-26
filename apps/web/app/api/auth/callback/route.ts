import { token_cookie } from "@/utils/shared";
import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server";
import { URLSearchParams } from "url";

type TokenResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
};

export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get("code");
    const res = NextResponse.redirect(new NextURL("/dashboard", request.url));

    if (code == null) {
        if (request.nextUrl.searchParams.get("error") === "access_denied") {
            return NextResponse.redirect(new NextURL("/auth", request.url));
        }

        return NextResponse.json(`Authorization code is missing`, {
            status: 401,
        });
    }

    const result = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        cache: "no-cache",
        headers: {
            ContentType: "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID!,
            client_secret: process.env.DISCORD_CLIENT_SECRET!,
            grant_type: "authorization_code",
            code,
            redirect_uri: new NextURL(
                "/api/auth/callback",
                request.url
            ).toString(),
        }),
    });

    if (!result.ok) {
        return NextResponse.json(
            `Invalid authorization code: ${await result.text()}`,
            {
                status: 401,
            }
        );
    }

    const data = (await result.json()) as TokenResponse;

    //use jwt-token for extra security and parameters
    res.cookies.set(token_cookie, data.access_token, {
        httpOnly: true,
        //minus 12 hours
        maxAge: data.expires_in - 60 * 60 * 12,
        secure: process.env.NODE_ENV === "production",
    });

    return res;
}
