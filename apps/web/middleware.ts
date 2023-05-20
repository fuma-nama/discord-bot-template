import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { token_cookie } from "./utils/shared";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if (request.cookies.has(token_cookie)) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/auth", request.url));
}

export const config = {
    matcher: "/dashboard/:path*",
};
