const helpers = require(`${__dirname}/../helpers/`);

function ping(event) {
  event.bot.sendMessage({
    to: event.channelID,
    message: 'Pong!',
  });
  helpers.statistics(event, 'ping');
}
module.exports = {
  name: 'ping',
  syntax: 'ping',
  patterns: [/^ping/i],
  description: 'Ping the bot!',
  command: ping,
};
