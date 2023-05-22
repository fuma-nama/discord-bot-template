"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarItem({
    href,
    children,
}: {
    href: string;
    children: string;
}) {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={cn(
                "text-sm text-muted-foreground",
                path === href && "text-foreground font-medium"
            )}
        >
            {children}
        </Link>
    );
}
