const client = require("./client");
const intents = require("./intents");
const { logger } = require("../utilities");
const { err } = logger;
module.exports = async () => {
  try {
    const DClient = await client(intents);
    return DClient;
  } catch (error) {
    err(error);
  }
};
