import { Icon } from "@/components/ui/avatar";
import { session } from "@/utils/auth/server";
import { Guild, PermissionFlags, fetchGuilds, iconUrl } from "@/utils/discord";
import Link from "next/link";
import { Suspense } from "react";

export default function DashboardPage() {
    const data = session();

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">
                Select your server and start using our bot
            </p>

            <Suspense fallback={<Skeleton />}>
                {/* @ts-expect-error Server Component */}
                <Guilds session={data} />
            </Suspense>
        </div>
    );
}

function Skeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {new Array(20).fill(null).map((_, i) => (
                <div
                    key={i}
                    className="flex flex-col gap-4 rounded-lg p-4 bg-card border-[1px]"
                >
                    <div className="w-[50px] h-[50px] rounded-md bg-secondary" />
                    <div className="w-[70%] h-[24px] rounded-md bg-secondary" />
                </div>
            ))}
        </div>
    );
}

async function Guilds({ session }: { session: string }) {
    const guilds = await fetchGuilds(session);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {guilds
                .filter(
                    (guild) =>
                        Number(guild.permissions) &
                        PermissionFlags.ADMINISTRATOR
                )
                .map((guild) => (
                    <Item key={guild.id} guild={guild} />
                ))}
        </div>
    );
}

function Item({ guild }: { guild: Guild }) {
    return (
        <Link
            href={`/dashboard/${guild.id}`}
            className="flex flex-col gap-4 rounded-lg p-4 bg-card border-[1px] hover:border-dominant transition-colors"
        >
            <Icon
                src={iconUrl(guild, 80)}
                className="rounded-md w-[50px] h-[50px]"
                fallback={guild.name}
            />
            <p className="font-semibold">{guild.name}</p>
        </Link>
    );
}
