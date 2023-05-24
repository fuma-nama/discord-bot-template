"use client";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { deleteItem } from "./actions";

export function DeleteButton({ guild, id }: { guild: string; id: number }) {
    const [isPending, startTransition] = useTransition();

    return (
        <Button
            variant="secondary"
            size="sm"
            disabled={isPending}
            onClick={() => startTransition(() => deleteItem(guild, id))}
        >
            Delete
        </Button>
    );
}
