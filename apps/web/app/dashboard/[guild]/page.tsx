import { logoutAction } from "@/components/auth/logout";
import { session } from "@/utils/auth/server";

export default function GuildPage() {
    const token = session();

    return (
        <div>
            Guild {token}
            <form action={logoutAction}>
                <button className="px-4 py-2 bg-white text-black">
                    Logout
                </button>
            </form>
        </div>
    );
}
