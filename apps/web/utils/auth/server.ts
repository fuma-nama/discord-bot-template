import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { token_cookie } from "../shared";

export function session() {
    const cookie = cookies().get(token_cookie);

    if (cookie == null) {
        return redirect("/auth");
    }

    return cookie.value;
}
