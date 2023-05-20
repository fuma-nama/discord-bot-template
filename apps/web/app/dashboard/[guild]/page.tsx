import { Logout } from "@/components/auth/logout";
import { session } from "@/utils/auth/server";

export default function GuildPage() {
    const token = session();

    return (
        <div>
            Guild {token}
            <Logout />
        </div>
    );
}
