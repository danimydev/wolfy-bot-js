const { WolframAlphaNodeAdapter } = require('./wolframalpha');
const WolframAlphaAPI = require('wolfram-alpha-node');
const { wolframalpha } = require('../config');

const wolframalphaAdapter = new WolframAlphaNodeAdapter({
  api: WolframAlphaAPI,
  appid: wolframalpha.appid,
});


module.exports = {
  wolframalphaAdapter,
}