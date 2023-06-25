"use client";
import { Button } from "ui/components/button";
import { useForm } from "react-hook-form";
import { Data, insert } from "./actions";
import { Input } from "ui/components/input";
import { experimental_useFormStatus } from "react-dom";

export function StorageForm({ guild }: { guild: string }) {
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

    const onSubmit = handleSubmit(async (v) => {
        reset({ message: "" });
        await insert(guild, v);
    });

    return (
        <form className="flex flex-row gap-4" action={() => onSubmit()}>
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
            <Create />
        </form>
    );
}

function Create() {
    const { pending } = experimental_useFormStatus();

    return <Button disabled={pending}>Create</Button>;
}
