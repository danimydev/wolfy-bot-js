const DiscordJS = require('discord.js');
const { DiscordBot } = require('./bot');
const { discord: { testServerId } } = require('../config');

const wolfy = new DiscordBot({
  DiscordJS,
  testServerId,
});

module.exports = {
  wolfy,
}