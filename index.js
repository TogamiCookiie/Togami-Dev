const { Client, Guild } = require("discord.js");
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
