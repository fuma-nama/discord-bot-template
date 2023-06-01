"use client";
import { Button } from "ui/components/button";
import { Textarea } from "ui/components/textarea";
import { GuildChannel } from "@/utils/discord";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "ui/components/select";
import { WelcomeFeature } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";
import { Data, disable, save } from "./actions";
import { useEffect, useTransition } from "react";
import { Field } from "ui/components/form";

export function UpdateForm({
    feature,
    channels,
    guild,
}: {
    feature: WelcomeFeature;
    channels: GuildChannel[];
    guild: string;
}) {
    const [isPending, startTransition] = useTransition();

    const { control, register, formState, reset, handleSubmit } = useForm<Data>(
        {
            defaultValues: {
                channel: feature.channel_id,
                message: feature.message,
            },
        }
    );

    useEffect(() => {
        reset({
            channel: feature.channel_id,
            message: feature.message,
        });
    }, [feature]);

    const onSubmit = handleSubmit((v) => {
        return startTransition(() => save(guild, v).then(() => reset(v)));
    });

    return (
        <form className="flex flex-col mt-4 gap-8 flex-1" onSubmit={onSubmit}>
            <Field>
                <Field.Label htmlFor="channel" className="font-semibold">
                    Channel
                </Field.Label>
                <Field.Description>
                    Text Channel to send the message
                </Field.Description>
                <Controller
                    control={control}
                    name="channel"
                    render={({ field }) => (
                        <Select
                            value={field.value ?? ""}
                            onValueChange={field.onChange}
                            name={field.name}
                        >
                            <SelectTrigger
                                id="channel"
                                ref={field.ref}
                                onBlur={field.onBlur}
                            >
                                {field.value != null ? (
                                    <SelectValue
                                        placeholder={
                                            <p className="text-muted-foreground">
                                                Select...
                                            </p>
                                        }
                                    />
                                ) : (
                                    <p className="text-muted-foreground">
                                        Select...
                                    </p>
                                )}
                            </SelectTrigger>
                            <SelectContent>
                                {channels.map((channel) => (
                                    <SelectItem
                                        key={channel.id}
                                        value={channel.id}
                                    >
                                        {channel.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />
                <Field.Error>{formState.errors.channel?.message}</Field.Error>
            </Field>
            <Field>
                <Field.Label htmlFor="message">Message</Field.Label>
                <Field.Description>
                    What to send when a member is joined
                </Field.Description>
                <Textarea
                    id="message"
                    placeholder="Type something here"
                    {...register("message")}
                />
                <Field.Error>{formState.errors.message?.message}</Field.Error>
            </Field>
            <div className="mt-auto flex flex-row gap-4 justify-end">
                {formState.isDirty ? (
                    <>
                        <Button className="w-24" disabled={isPending}>
                            {isPending ? "Saving..." : "Save"}
                        </Button>
                        <Button
                            className="w-24"
                            variant="secondary"
                            type="button"
                            onClick={() => {
                                reset({
                                    channel: feature.channel_id,
                                    message: feature.message,
                                });
                            }}
                        >
                            Discard
                        </Button>
                    </>
                ) : (
                    <Button
                        key="disable"
                        type="button"
                        className="w-24"
                        variant="destructive"
                        onClick={() => startTransition(() => disable(guild))}
                    >
                        Disable
                    </Button>
                )}
            </div>
        </form>
    );
}
