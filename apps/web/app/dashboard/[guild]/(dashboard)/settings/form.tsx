"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Data, updateSettings } from "./actions";
import { Settings } from "@prisma/client";

export function SettingsForm({
    guild,
    data,
}: {
    guild: string;
    data: Settings;
}) {
    const [isPending, startTransition] = useTransition();
    const { register, handleSubmit, formState, reset } = useForm<Data>({
        defaultValues: {
            prefix: data.prefix,
        },
    });

    const onSubmit = handleSubmit((v) => {
        startTransition(() => updateSettings(guild, v));
    });

    const onReset = () => {
        reset({
            prefix: data.prefix,
        });
    };

    useEffect(() => {
        reset({ prefix: data.prefix });
    }, [data]);

    return (
        <form className="flex-1 flex flex-col gap-8" onSubmit={onSubmit}>
            <fieldset className="flex flex-col gap-3">
                <div>
                    <label className="font-bold">Command Prefix</label>
                    <p className="text-sm text-muted-foreground">
                        The prefix of commands
                    </p>
                </div>
                <Input
                    {...register("prefix", {
                        required: "this field is required",
                        maxLength: {
                            value: 1,
                            message: "Can't longer than 1 character",
                        },
                    })}
                    placeholder="/"
                    minLength={1}
                    maxLength={1}
                />
                {formState.errors.prefix && (
                    <p className="text-destructive text-sm mt-1">
                        {formState.errors.prefix.message}
                    </p>
                )}
            </fieldset>
            <div className="mt-auto flex flex-row justify-end gap-3">
                <Button disabled={!formState.isDirty || isPending}>Save</Button>
                {formState.isDirty && (
                    <Button variant="secondary" onClick={onReset}>
                        Discard
                    </Button>
                )}
            </div>
        </form>
    );
}
