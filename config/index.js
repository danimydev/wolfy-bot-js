const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const config = {
  discord: {
    botToken: process.env.DS_BOT_TOKEN,
    testServerId: process.env.DS_TEST_SERVER_ID,
  },
  wolframalpha: {
    baseUrl: process.env.WA_API_URL,
    appid: process.env.WA_APP_ID
  }
}

module.exports = config;