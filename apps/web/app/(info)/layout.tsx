import { Logo } from "@/components/icons/logo";
import Link from "next/link";
import { ReactNode } from "react";
import {
    DropdownMenuTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { ThemeSwitchItem } from "@/components/theme-switch";

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
                    <p className="font-bold mr-auto">Discord Bot</p>
                </Link>
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
                    <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <ThemeSwitchItem />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}