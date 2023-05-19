"use client";
import useSWRMutation from "swr/mutation";

export function Form() {
    const { isMutating, trigger } = useSWRMutation("/api/send_message", () =>
        fetch("/api/send-message", { method: "POST" })
    );

    return (
        <button
            className="bg-white text-black px-4 py-2 rounded-md"
            onClick={trigger}
        >
            {isMutating ? "Running" : "Run Action"}
        </button>
    );
}
