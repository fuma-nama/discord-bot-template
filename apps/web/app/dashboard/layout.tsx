import { Icon } from "ui/components/avatar";
import { session } from "@/utils/auth/server";
import { fetchUserInfo } from "@/utils/discord";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "ui/components/dropdown-menu";
import { ReactNode, Suspense } from "react";
import Link from "next/link";
import { logoutAction } from "@/utils/auth/logout";
import { LogoutDropdownMenuItem } from "./logout";
import { Logo, MenuIcon } from "ui/icons";
import { Separator } from "ui/components/separator";
import { avatarUrl, invite_url } from "@/utils/shared";
import { ThemeSwitchItem } from "@/components/ui/theme-switch";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex flex-col relative min-h-screen">
            <Navbar />
            <div className="container py-12 lg:py-24 flex-1 flex flex-col">
                {children}
            </div>
        </main>
    );
}

function Navbar() {
    return (
        <nav className="border-b-2 sticky top-0 bg-background z-50">
            <div className="container flex flex-row gap-4 py-3">
                <div className="flex flex-row items-center flex-1">
                    <Link href="/dashboard">
                        <Logo className="w-7 h-7" />
                    </Link>
                    <Separator className="flex-shrink-0 w-8 h-8 mx-1 text-border" />
                    <Suspense
                        fallback={
                            <span className="w-20 h-7 rounded-lg bg-secondary" />
                        }
                    >
                        {/* @ts-expect-error Server Component */}
                        <UserWithName />
                    </Suspense>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <Link
                        href={invite_url}
                        target="_blank"
                        className="bg-secondary text-secondary-foreground rounded-md px-4 py-1 font-medium text-sm max-md:hidden"
                    >
                        Invite
                    </Link>
                    <Suspense
                        fallback={
                            <span className="w-7 h-7 rounded-full bg-secondary" />
                        }
                    >
                        {/* @ts-expect-error Server Component */}
                        <MenuTrigger />
                    </Suspense>
                </div>
            </div>
        </nav>
    );
}

async function UserWithName() {
    const data = session();
    const user = await fetchUserInfo(data);

    return (
        <div className="flex flex-row gap-2 items-center flex-1">
            <Icon
                className="w-7 h-7"
                src={avatarUrl(user, 80)}
                fallback={user.username}
            />
            <p className="font-medium text-sm overflow-hidden flex-1 w-0 overflow-ellipsis whitespace-nowrap">
                {user.username}
            </p>
        </div>
    );
}

async function MenuTrigger() {
    const data = session();
    const user = await fetchUserInfo(data);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:outline-none">
                <MenuIcon className="w-7 h-7 md:hidden" />
                <Icon
                    className="w-7 h-7 max-md:hidden"
                    src={avatarUrl(user, 80)}
                    fallback={user.username}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{user.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <ThemeSwitchItem />
                <DropdownMenuSeparator />
                <LogoutDropdownMenuItem logout={logoutAction} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
