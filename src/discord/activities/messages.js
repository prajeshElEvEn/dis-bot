// Read more about Message: https://old.discordjs.dev/#/docs/discord.js/main/class/Message

const messages = module.exports;
const { logger } = require("../../utilities");
const { log, err, success } = logger;
const serverConfig = require("../../../discordServer/config.json");

messages.onMessage = async (client, message) => {
  // log message
  console.log(message);
  let { channelId, author, content } = message;
  if (author.bot) {
    return;
  }

  log(`${author.username}> ${content}`);

  if (channelId == serverConfig.channelId && content == "!verify") {
    message.reply(`Enter your fullname ${author.username}`);
  }
};
