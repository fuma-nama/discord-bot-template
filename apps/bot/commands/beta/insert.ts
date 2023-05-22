import { protectedCommand } from "@/utils/dfp.js";
import { prisma } from "@/utils/prisma.js";
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
        const result = await prisma.test.create({
            data: {
                guild_id: event.guildId!,
                value: options.value,
            },
        });

        await event.reply(
            `Inserted data: ${result.value} (${result.id}) (ctx: ${ctx.message})`
        );
    },
});
