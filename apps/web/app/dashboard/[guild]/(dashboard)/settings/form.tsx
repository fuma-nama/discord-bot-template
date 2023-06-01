"use client";
import { Button } from "ui/components/button";
import { Input } from "ui/components/input";
import { useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Data, updateSettings } from "./actions";
import { Settings } from "@prisma/client";
import { Field } from "ui/components/form";

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
        <form className="flex flex-col gap-8 flex-1" onSubmit={onSubmit}>
            <Field>
                <Field.Label htmlFor="prefix">Command Prefix</Field.Label>
                <Field.Description>The prefix of commands</Field.Description>
                <Input
                    id="prefix"
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
                <Field.Error>{formState.errors.prefix?.message}</Field.Error>
            </Field>
            <div className="flex flex-row justify-end gap-3 mt-auto">
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
