const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once("ready", () => {
  console.log("BOT IS ONLINE!");
  client.user.setActivity("By Youssef 👑", { type: "WATCHING" });
});

client.on("messageCreate", message => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("Pong 🏓");
  }

  if (message.content === "!help") {
    message.reply("Commands: !ping");
  }
});

client.login(process.env.TOKEN);
