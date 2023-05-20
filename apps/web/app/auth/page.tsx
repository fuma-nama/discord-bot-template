import { getLoginUrl } from "@/utils/auth/client";
import Link from "next/link";

export default function AuthPage() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Auth</h1>
            <LoginForm />
        </div>
    );
}

function LoginForm() {
    return (
        <div>
            <Link
                className="bg-white text-black rounded-md px-4 py-2"
                href={getLoginUrl()}
            >
                Login
            </Link>
        </div>
    );
}
