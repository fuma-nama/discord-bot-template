import { initDiscordFP } from "@discord-fp/djs";

export const dfp = initDiscordFP();

export const command = dfp.command;

export const protectedCommand = dfp.command.middleware(({ event, next }) => {
    //check permissions

    return next({
        ctx: {
            message: "hello world",
        },
        event,
    });
});
