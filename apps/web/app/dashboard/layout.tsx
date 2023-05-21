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
import { MenuIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex flex-col relative">
            <Navbar />
            <div className="container py-12 lg:py-24">{children}</div>
        </main>
    );
}

function Navbar() {
    return (
        <nav className="border-b-2 sticky top-0 bg-background z-50">
            <div className="container flex flex-row py-3 items-center">
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

                <div className="mx-auto" />
                <Suspense
                    fallback={
                        <span className="w-7 h-7 rounded-full bg-secondary" />
                    }
                >
                    {/* @ts-expect-error Server Component */}
                    <MenuTrigger />
                </Suspense>
            </div>
        </nav>
    );
}

async function UserWithName() {
    const data = session();
    const user = await fetchUserInfo(data);

    return (
        <div className="flex flex-row gap-2 items-center">
            <Icon
                className="w-7 h-7"
                src={avatarUrl(user, 80)}
                fallback={user.username}
            />
            <p className="font-medium text-sm">{user.username}</p>
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
