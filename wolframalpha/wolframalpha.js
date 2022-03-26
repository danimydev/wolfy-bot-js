class WolframAlphaNodeAdapter {

  #api;

  constructor({ api, appid }) {
    this.#api = api(appid);
  }

  async getFull({ input }) {
    const { pods } = await this.#api.getFull(input);
    return pods.map(p => this.#formatPod(p));
  }

  async getShort({ input }) {
    const response = await this.#api.getShort(input);
    return [
      {
        title: 'Input',
        text: input,
      },
      {
        title: 'Result',
        text: response,
      }
    ]
  }
  async getSpoken({ input }) {
    const response = await this.#api.getSpoken(input);
    return [
      {
        title: 'Input',
        text: input,
      },
      {
        title: 'Spoken',
        text: response,
      }
    ]
  }

  #formatPod(pod) {
    return {
      title: pod.title,
      text: pod.subpods[0].plaintext,
    }
  }

}

module.exports = {
  WolframAlphaNodeAdapter,
}