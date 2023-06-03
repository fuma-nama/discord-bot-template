import { protectedCommand } from "@/utils/dfp.js";
import { db, test } from "db";
import { options } from "@discord-fp/djs";

export default protectedCommand.slash({
    description: "Insert data",
    options: {
        value: options.string({
            description: "Value to insert",
            maxLen: 100,
        }),
    },
    scope: {
        dm: false,
    },
    async execute({ event, options, ctx }) {
        const res = await db
            .insert(test)
            .values({
                guildId: event.guildId!,
                value: options.value,
            })
            .returning();

        await event.reply(
            `Inserted data: ${options.value} (${res[0].id}) (ctx: ${ctx.message})`
        );
    },
});
