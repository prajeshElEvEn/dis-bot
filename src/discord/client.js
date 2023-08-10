const { Client } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const events = require("./events");
const { logger } = require("../utilities");
const { err, success } = logger;

const init = async (intents) => {
  try {
    const client = new Client({
      intents: intents,
    });

    Object.keys(events).forEach((eventName) => {
      if (typeof events[eventName] === "function") {
        client.on(eventName, events[eventName].bind(null, client));
      }
    });

    await client.login(process.env.DISCORD_TOKEN);
    success("Client is logged in");
    return client;
  } catch (error) {
    err(error);
  }
};

module.exports = init;
