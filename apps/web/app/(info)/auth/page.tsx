import { buttonVariants } from "ui/components/button";
import { getLoginUrl } from "@/utils/auth/client";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function AuthPage() {
    return (
        <div className="flex flex-col gap-4 container items-center justify-center text-center flex-1 max-w-sm">
            <h1 className="text-2xl font-bold">Login to Dashboard</h1>
            <LoginForm />
        </div>
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
