const messages = module.exports;
const { logger } = require("../../utilities");
const { log, err, success } = logger;

messages.onMessage = async (client, message) => {
  // log message
  log(`${message.author.username}> ${message.content}`);
};
