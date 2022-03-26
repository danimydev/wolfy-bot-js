class DiscordBot {

  #client;
  #commands;
  #guild;

  constructor({ DiscordJS, testServerId }) {
    this.#client = this.#buildClient({ DiscordJS });
    this.setEvent({
      discordEvent: 'ready',
      handler: () => {
        this.#setGild({ testServerId });
        this.#setCommands();
        console.log('Bot connected');
      }
    });
  }

  initialize({ token }) {
    this.#client.login(token);
  }

  #buildClient({ DiscordJS }) {
    return new DiscordJS.Client({
      intents: [
        DiscordJS.Intents.FLAGS.GUILDS,
        DiscordJS.Intents.FLAGS.GUILD_MESSAGES,
      ],
    });
  }

  #setGild({ testServerId }) {
    this.#guild = this.#client.guilds.cache.get(testServerId);
  }

  #setCommands() {
    return this.#guild
      ? this.#guild.commands
      : this.#client.application?.commands;
  }

  setEvent({ discordEvent, handler }) {
    this.#client.on(discordEvent, handler);
  }

  registerCommand({ name, description, options = [] }) {
    this.#commands?.create({ name, description, options });
  }

}

module.exports = {
  DiscordBot,
}