import { Icon } from "@/components/ui/avatar";
import { session } from "@/utils/auth/server";
import { avatarUrl, fetchUserInfo } from "@/utils/discord";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ReactNode, Suspense } from "react";
import Link from "next/link";
import { logoutAction } from "@/utils/auth/logout";
import { LogoutDropdownMenuItem } from "./logout";
import { Logo } from "@/components/icons/logo";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex flex-col">
            <Navbar />
            <div className="container py-12 lg:py-24">{children}</div>
        </main>
    );
}

function Navbar() {
    return (
        <nav className="border-b-2">
            <div className="container flex flex-row gap-3 py-2 items-center">
                <Logo className="w-6 h-6" />
                <p className="font-bold mr-auto">Discord Bot</p>

                <Suspense
                    fallback={
                        <span className="w-10 h-10 rounded-full bg-secondary" />
                    }
                >
                    {/* @ts-expect-error Server Component */}
                    <User />
                </Suspense>
            </div>
        </nav>
    );
}

async function User() {
    const data = session();
    const user = await fetchUserInfo(data);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:outline-none">
                <Icon src={avatarUrl(user, 80)} fallback={user.username} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{user.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <LogoutDropdownMenuItem logout={logoutAction} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
