import { session } from "@/utils/auth/server";
import { fetchGuilds } from "@/utils/discord";
import { Suspense } from "react";
import { GuildsProvider, GuildsContent } from "./guilds";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Select your server and getting started",
};

/**
 * Home Page
 */
export default function DashboardPage() {
    const data = session();

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground">
                Dashboard
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
                Select your server and start using our bot
            </p>

            <GuildsProvider>
                <Suspense fallback={<Skeleton />}>
                    {/* @ts-expect-error Server Component */}
                    <Guilds session={data} />
                </Suspense>
            </GuildsProvider>
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

    return <GuildsContent guilds={guilds} />;
}
