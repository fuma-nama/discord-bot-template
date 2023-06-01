"use client";
import { Icon } from "ui/components/avatar";
import { buttonVariants } from "ui/components/button";
import { Input } from "ui/components/input";
import { cn } from "@/utils/cn";
import { Guild, PermissionFlags } from "@/utils/discord";
import { iconUrl, invite_url } from "@/utils/shared";
import Link from "next/link";
import { ReactNode, createContext, useContext, useState } from "react";

const GuildFilterContext = createContext({
    filter: "",
});

export function GuildsContent({ guilds }: { guilds: Guild[] }) {
    const { filter } = useContext(GuildFilterContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {guilds
                .filter(
                    (guild) =>
                        Number(guild.permissions) &
                            PermissionFlags.ADMINISTRATOR &&
                        guild.name.toLowerCase().includes(filter.toLowerCase())
                )
                .map((guild) => (
                    <Item key={guild.id} guild={guild} />
                ))}
        </div>
    );
}

export function GuildsProvider({ children }: { children: ReactNode }) {
    const [filter, setFilter] = useState("");

    return (
        <GuildFilterContext.Provider value={{ filter }}>
            <div className="flex flex-row gap-4">
                <Input
                    placeholder="Search..."
                    className="flex-1"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <Link
                    href={invite_url}
                    target="_blank"
                    className={cn(buttonVariants())}
                >
                    Invite Bot
                </Link>
            </div>
            {children}
        </GuildFilterContext.Provider>
    );
}

function Item({ guild }: { guild: Guild }) {
    return (
        <Link
            href={`/dashboard/${guild.id}`}
            className="flex flex-col gap-4 rounded-lg p-4 bg-card border-[1px] hover:border-primary transition-colors"
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
