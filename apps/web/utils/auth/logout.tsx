"use server";

import { token_cookie } from "@/utils/shared";
import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
    cookies().delete(token_cookie);
    redirect("/");
}
