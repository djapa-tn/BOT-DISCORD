const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once("ready", () => {
  console.log("BOT IS ONLINE!");

  client.user.setPresence({
    activities: [{
      name: "By Youssef 👑 | /help",
      type: 3 // WATCHING
    }],
    status: "dnd" // online | idle | dnd | invisible
  });

  // Si tu veux ajouter setActivity, tu peux, mais c'est déjà fait dans setPresence
  // client.user.setActivity("By Youssef 👑", { type: "WATCHING" });
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

if (!process.env.TOKEN) {
  console.log("TOKEN MISSING ❌");
} else {
  console.log("TOKEN OK ✔️");
  client.login('ODQxNDc0ODU0ODAwMzI2NjY3.GqJRdN._sKnuPM2tuYMoXQtqp8Y9K23k_6I3piO6ugLVE'); // <-- Remplace par process.env.TOKEN si tu utilises .env
}

