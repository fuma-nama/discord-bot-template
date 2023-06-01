"use client";
import { Button } from "ui/components/button";
import { useForm } from "react-hook-form";
import { Data, insert } from "./actions";
import { useTransition } from "react";
import { Input } from "ui/components/input";

export function StorageForm({ guild }: { guild: string }) {
    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Data>({
        defaultValues: {
            message: "",
        },
    });

    const onSubmit = handleSubmit((v) => {
        reset({ message: "" });
        return startTransition(() => insert(guild, v));
    });

    return (
        <form className="flex flex-row gap-4" onSubmit={onSubmit}>
            <div className="flex-1">
                <Input
                    {...register("message", {
                        required: "the value can't be empty",
                    })}
                    aria-invalid={errors.message ? "true" : "false"}
                    placeholder="Insert data"
                />
                {errors.message && (
                    <p className="text-destructive text-sm mt-1">
                        {errors.message.message}
                    </p>
                )}
            </div>
            <Button disabled={isPending}>Create</Button>
        </form>
    );
}
