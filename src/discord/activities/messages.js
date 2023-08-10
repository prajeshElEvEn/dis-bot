// Read more about Message: https://old.discordjs.dev/#/docs/discord.js/main/class/Message

const messages = module.exports;
const { logger } = require("../../utilities");
const { log, err, success } = logger;

messages.onMessage = async (client, message) => {
  // log message
  console.log(message);
  log(`${message.author.username}> ${message.content}`);
};
