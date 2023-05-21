import { Logo } from "@/components/icons/logo";
import { buttonVariants } from "@/components/ui/button";
import { getLoginUrl } from "@/utils/auth/client";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function AuthPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <nav className="container flex flex-row gap-3 py-2 items-center">
                <Logo className="w-6 h-6" />
                <p className="font-bold mr-auto">Discord Bot</p>
            </nav>
            <div className="flex flex-col gap-4 container items-center justify-center text-center flex-1 max-w-[400px]">
                <h1 className="text-2xl font-bold">Login to Dashboard</h1>
                <LoginForm />
            </div>
        </main>
    );
}

function LoginForm() {
    return (
        <div className="flex flex-col w-full mt-4">
            <Link
                className={cn(buttonVariants({ size: "lg" }))}
                href={getLoginUrl()}
            >
                Continue with Discord
            </Link>
        </div>
    );
}
