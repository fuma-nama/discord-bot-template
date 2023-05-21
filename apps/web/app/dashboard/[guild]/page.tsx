import { fetchGuildInfo } from "@/utils/discord";
import { InvitePanel } from "./invite-panel";

export default async function GuildPage({
    params,
}: {
    params: { guild: string };
}) {
    const guild = await fetchGuildInfo(process.env.TOKEN!, params.guild);

    if (guild == null) {
        return <InvitePanel guild={params.guild} />;
    }

    return (
        <div>
            <h1 className="text-4xl font-bold">{guild?.name}</h1>
        </div>
    );
}
