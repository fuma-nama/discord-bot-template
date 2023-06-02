"use client";
import { cn } from "@/utils/cn";
import { discord_url, github_url } from "@/utils/shared";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItems() {
    const pathname = usePathname().split("/");

    return (
        <div className="flex flex-row gap-8 items-center text-muted-foreground font-medium text-sm max-md:hidden">
            <Link
                href="/docs"
                className={cn(
                    pathname[1] === "docs" && "text-semibold text-foreground"
                )}
            >
                Documentation
            </Link>
            <a href={discord_url} rel="onopener noreferrer" target="_blank">
                Discord
            </a>
            <a href={github_url} rel="onopener noreferrer" target="_blank">
                Github
            </a>
        </div>
    );
}
