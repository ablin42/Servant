const Discord = require("discord.js");
const client = new Discord.Client({
  //partials: ["MESSAGE"]
});
require("dotenv").config();

const BOT_PREFIX = "#";
const BOT_COMMANDS = {};

client.on("ready", () => {
  console.log("Slave logged in");
});

client.on("message", (msg) => {
  if (msg.content === "Ping") msg.reply("Pong!");
});

client.login(process.env.BOT_TOKEN);
