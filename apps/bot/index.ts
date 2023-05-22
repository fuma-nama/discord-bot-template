import { dfp } from "./utils/dfp.js";
import { Client, GatewayIntentBits } from "discord.js";
import { connectKafka } from "./utils/kafka.js";

//store your token in environment variable or put it here
const token = process.env["DISCORD_BOT_TOKEN"];
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
    connectKafka().then(() => console.log("Connected to Kafka"));

    dfp.start({
        client,
        load: ["./commands"],
    });
});

client.login(token);
