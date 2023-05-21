"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { invite_url } from "@/utils/shared";
import useSWR from "swr";
import { refresh } from "./actions";
import Link from "next/link";

export function InvitePanel({ guild }: { guild: string }) {
    useSWR(`/refresh/guilds/${guild}`, () => refresh(guild), {
        revalidateOnMount: false,
    });

    return (
        <div className="flex flex-col gap-4 w-full items-center justify-center text-center max-w-sm mx-auto flex-1">
            <h1 className="text-2xl font-bold">Where are you?</h1>
            <p className="text-muted-foreground text-sm">
                We cannot reach your server now
            </p>
            <Link
                href={invite_url + `&guild_id=${guild}`}
                target="_blank"
                className={cn(
                    buttonVariants({
                        className: "mt-4 w-full",
                        size: "lg",
                    })
                )}
            >
                Invite
            </Link>
        </div>
    );
}
