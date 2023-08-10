const { logger } = require("../utilities");
const { log, err, success } = logger;

const events = module.exports;

events.ready = async (client, bot) => {
  success(`${bot.user.tag} is online`);
};
