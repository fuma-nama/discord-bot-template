"use client";
import { DropdownMenuItem } from "ui/components/dropdown-menu";
import {
    isRedirectError,
    getURLFromRedirectError,
} from "next/dist/client/components/redirect";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";

export function LogoutDropdownMenuItem({
    logout,
}: {
    logout: () => Promise<void>;
}) {
    const router = useRouter();
    const { trigger, isMutating } = useSWRMutation("/api/auth/logout", logout, {
        throwOnError: false,
        onError: (err) => {
            if (isRedirectError(err)) {
                router.push(getURLFromRedirectError(err));
            }
        },
    });

    return (
        <DropdownMenuItem
            className="focus:bg-destructive focus:text-destructive-foreground"
            onClick={() => void trigger()}
        >
            {isMutating ? "Logging out" : "Logout"}
        </DropdownMenuItem>
    );
}
