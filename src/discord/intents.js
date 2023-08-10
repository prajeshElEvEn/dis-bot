// Read more about Flags: https://discord-api-types.dev/api/discord-api-types-v10/enum/GatewayIntentBits

const { IntentsBitField } = require("discord.js");
const intents = [
  IntentsBitField.Flags.Guilds,
  IntentsBitField.Flags.GuildMembers,
  IntentsBitField.Flags.GuildMessages,
  IntentsBitField.Flags.MessageContent,
];

module.exports = intents;
