import Link from "next/link";
import { ReactNode } from "react";
import {
    DropdownMenuTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "ui/components/dropdown-menu";
import { Logo, MenuIcon } from "ui/icons";
import { ThemeSwitchItem } from "@/components/ui/theme-switch";
import { NavItems } from "./nav-items";
import { github_url } from "@/utils/shared";

export default function InfoLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            {children}
        </main>
    );
}

function Navbar() {
    return (
        <nav className="sticky top-0 py-4 backdrop-blur-xl border-b-[1px] bg-background/50 z-50">
            <div className="container flex flex-row gap-8 items-center">
                <Link href="/" className="flex flex-row gap-3 items-center">
                    <Logo className="w-6 h-6" />
                    <p className="font-bold">Discord Bot</p>
                </Link>
                <NavItems />
                <Trigger />
            </div>
        </nav>
    );
}

function Trigger() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="ml-auto focus-visible:outline-none">
                <MenuIcon className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild>
                    <Link href="/docs">Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <ThemeSwitchItem />
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <a
                        href={github_url}
                        rel="onopener noreferrer"
                        target="_blank"
                    >
                        Github -&gt;
                    </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
