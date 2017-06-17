const helpers = require(`${__dirname}/../helpers/`);

function bark(event) {
  const answers = [
    '_yip!_',
    '_grrrruff~_',
    '_snorts awake_',
    'Awrr? ;w;',
    '_tailwag_',
    '_bark, bark!_',
  ];
  const msg = helpers.randomArray(answers);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg,
  });
  helpers.statistics(event, 'bark');
}
module.exports = {
  name: 'bark',
  author: 'thattacoguy',
  syntax: 'bark',
  hidden: true,
  patterns: [/^bark/i, /^woof/i, /^yip/i, /^woof/i, /^speak/i],
  description: 'boof',
  command: bark,
};
