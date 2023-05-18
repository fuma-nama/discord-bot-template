import { command } from "@/utils/dfp.js";
import { options } from "@discord-fp/djs";

export default command.slash({
    description: "Say Hello to you",
    options: {
        name: options
            .string({
                description: "Your name",
            })
            .transform((v) => {
                return `Mr.${v}`;
            }),
    },
    execute: async ({ event, options }) => {
        await event.reply(`Hello! ${options.name}`);
    },
});
