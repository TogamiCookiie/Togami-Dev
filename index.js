const { Client } = require("discord.js");
const client = new Client();

client.once("ready", () => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator} and on ${client.guilds.cache.size} guilds.`);
});

client.login(require("./config.json").token);
