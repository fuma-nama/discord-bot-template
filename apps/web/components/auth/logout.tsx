import { token_cookie } from "@/utils/shared";
import { cookies } from "next/dist/client/components/headers";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";
import { redirect } from "next/navigation";

async function logoutAction() {
    "use server";

    (cookies() as RequestCookies).delete(token_cookie);
    redirect("/");
}

export function Logout() {
    return (
        <form action={logoutAction}>
            <button>Logout</button>
        </form>
    );
}
