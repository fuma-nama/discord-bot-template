"use server";

import { token_cookie } from "@/utils/shared";
import { cookies } from "next/dist/client/components/headers";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";
import { redirect } from "next/navigation";

export async function logoutAction() {
    (cookies() as RequestCookies).delete(token_cookie);
    redirect("/");
}
