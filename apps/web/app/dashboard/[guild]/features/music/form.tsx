"use client";
import { Button } from "ui/components/button";
import { Field } from "ui/components/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "ui/components/select";
import { Role } from "@/utils/discord";
import { Controller, useForm } from "react-hook-form";
import { Data, save } from "./actions";
import { useEffect, useTransition } from "react";
import { MusicFeature } from "@prisma/client";

export function Form({
    guild,
    data,
    roles,
}: {
    guild: string;
    data: MusicFeature | null;
    roles: Role[];
}) {
    const [isPending, startTransition] = useTransition();
    const { control, formState, reset, handleSubmit } = useForm<Data>({
        defaultValues: {
            role: data?.controller_role ?? null,
        },
    });

    const onSubmit = handleSubmit((v) => {
        startTransition(() => save(guild, v));
    });

    useEffect(() => {
        reset({
            role: data?.controller_role ?? null,
        });
    }, [data]);

    return (
        <form className="flex flex-col gap-4 mt-4 flex-1" onSubmit={onSubmit}>
            <Field>
                <Field.Label htmlFor="role">Admin Role</Field.Label>
                <Field.Description>
                    The role that has the permissions to manage playlist
                </Field.Description>
                <Controller
                    name="role"
                    control={control}
                    render={({
                        field: { name, value, onChange, ...field },
                    }) => (
                        <Select
                            name={name}
                            value={value ?? "null"}
                            onValueChange={(v) =>
                                onChange(v === "null" ? null : v)
                            }
                        >
                            <SelectTrigger id="role" {...field}>
                                <SelectValue placeholder="Select Role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="null">None</SelectItem>

                                {roles.map((role) => (
                                    <SelectItem key={role.id} value={role.id}>
                                        <div
                                            className="mr-3 inline-flex w-3 h-3 rounded-full bg-white"
                                            style={{
                                                backgroundColor: `#${role.color.toString(
                                                    16
                                                )}`,
                                            }}
                                        />
                                        {role.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />
                <Field.Error>{formState.errors.role?.message}</Field.Error>
            </Field>
            <div className="flex flex-row gap-3 justify-end mt-auto">
                <Button disabled={!formState.isDirty || isPending}>Save</Button>
            </div>
        </form>
    );
}
