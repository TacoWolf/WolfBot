const helpers = require(`${__dirname}/../helpers/`);

function awoo(event) {
  const awoos = [
    '_howl~_',
    'Awoooooooooooooo~! `^w^`',
    'A-awoo~ >w<',
    'Awoo! :3',
    'Awoo! >w<',
  ];
  const msg = helpers.randomArray(awoos);
  event.bot.sendMessage({
    to: event.channelID,
    message: msg,
  });
  helpers.statistics(event, 'awoo');
}
module.exports = {
  name: 'awoo',
  syntax: 'awoo',
  hidden: true,
  patterns: [/^awoo/i, /^howl/i, /^speak/i],
  description: 'awoooo',
  command: awoo,
};
