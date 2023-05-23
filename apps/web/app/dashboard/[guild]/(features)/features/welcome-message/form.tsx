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
import useSWRMutation from "swr/mutation";
import { Data } from "./page";
import { useEffect } from "react";

export function UpdateForm({
    feature,
    channels,
    submit,
}: {
    feature: WelcomeFeature;
    channels: GuildChannel[];
    submit: (data: Data) => Promise<void>;
}) {
    const mutation = useSWRMutation(
        "/features/update/welcome-message",
        (_, { arg }: { arg: Data }) => submit(arg)
    );
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
        return mutation.trigger(v);
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
                <Button
                    className="w-24"
                    disabled={!formState.isDirty || mutation.isMutating}
                >
                    {mutation.isMutating ? "Saving..." : "Save"}
                </Button>
                <Button
                    className="w-24"
                    variant="secondary"
                    disabled={!formState.isDirty}
                    onClick={() => {
                        reset({
                            channel: feature.channel_id,
                            message: feature.message,
                        });
                    }}
                >
                    Discard
                </Button>
            </div>
        </form>
    );
}
