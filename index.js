const discord = require("./src/discord");

const initializeApp = async () => {
  const client = await discord();
};

initializeApp();
