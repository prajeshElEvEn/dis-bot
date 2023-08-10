const { logger } = require("../utilities");
const { log, err, success } = logger;
const activities = require("./activities");

const events = module.exports;

events.ready = async (client, bot) => {
  success(`${bot.user.tag} is online`);
};

events.messageCreate = async (client, message) => {
  await activities.messages.onMessage(client, message);
};
