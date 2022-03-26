const { Constants } = require('discord.js');
const { discord } = require('./config');
const { wolfy } = require('./bot');
const { interactionCreateHandler } = require('./bot/handlers');

wolfy.registerCommand({
  name: 'wolfy',
  description: 'rreplies with wolframalpha response',
  options: [
    {
      name: 'format',
      description: 'specifies response format by default is full but it could be short, spoken',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING,
    },
    {
      name: 'input',
      description: 'could be any english sentence, number or any math question',
      required: false,
      type: Constants.ApplicationCommandOptionTypes.STRING,
    }
  ],
});

wolfy.setEvent({
  discordEvent: 'interactionCreate',
  handler: interactionCreateHandler,
});

wolfy.initialize({ token: discord.botToken });