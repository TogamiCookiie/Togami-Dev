if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

const { Client } = require("discord.js");
const client = new Client();

client.once("ready", () => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator} and on ${client.guilds.cache.size} guilds.`);
});

client.on("message", (msg) => {
    if (msg.author.bot) return;

    if (msg.content === "ping") {
        return msg.reply("pong!");
    }
});

client.login(require("./config.json").token);
