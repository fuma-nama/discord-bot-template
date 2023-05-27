"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function SidebarItem({
    href,
    children,
}: {
    href: string;
    children: ReactNode;
}) {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={cn(
                "flex flex-row gap-3 items-center hover:text-primary rounded-lg text-sm text-muted-foreground",
                path === href && "text-foreground font-medium"
            )}
        >
            {children}
        </Link>
    );
}
