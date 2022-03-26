const { wolframalphaAdapter } = require('../../wolframalpha');

async function interactionCreateHandler(interaction) {
  if (!interaction.isCommand()) {
    return
  }
  const { commandName, options } = interaction;
  if (commandName === 'wolfy') {
    const format = options.getString('format') || 'full';
    const input = options.getString('input');
    const array = await wolframalphaAdapter.getFull({ input });
    let content = ``;
    array.forEach(element => {
      content += JSON.stringify(element);
    });
    interaction.reply({ content });
  }
}

module.exports = {
  interactionCreateHandler,
}