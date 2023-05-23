"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GuildChannel } from "@/utils/discord";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { WelcomeFeature } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";
import { Data, disable, save } from "./actions";
import { useEffect, useTransition } from "react";

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
        return startTransition(() => save(guild, v));
    });

    return (
        <form className="flex flex-col gap-4 flex-1" onSubmit={onSubmit}>
            <fieldset className="space-2">
                <label className="font-medium text-sm">Channel</label>
                <Controller
                    control={control}
                    name="channel"
                    render={({ field }) => (
                        <Select
                            value={field.value ?? ""}
                            onValueChange={field.onChange}
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
            </fieldset>
            <fieldset className="space-2">
                <label htmlFor="message" className="text-sm font-medium">
                    Message
                </label>
                <Textarea
                    id="message"
                    placeholder="Type something here"
                    {...register("message")}
                />
            </fieldset>
            <div className="mt-auto flex flex-row gap-4 justify-end">
                {formState.isDirty ? (
                    <>
                        <Button className="w-24" disabled={isPending}>
                            {isPending ? "Saving..." : "Save"}
                        </Button>
                        <Button
                            key="disable"
                            className="w-24"
                            variant="secondary"
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
