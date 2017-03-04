const helpers = require(`${__dirname}/../helpers/`);

function coin(event) {
  const coins = ['heads', 'tails'];
  const res = helpers.randomArray(coins);
  const embed = {
    description: `You got **${res}**, <@${event.userID}>!`,
    color: 6592564,
  };
  event.bot.sendMessage({
    to: event.channelID,
    embed,
  });
  helpers.statistics(event, 'coin');
}
module.exports = {
  name: 'coin',
  author: 'thattacoguy',
  syntax: 'coin',
  patterns: [/^(flip a )?coin/i],
  description: 'Flip a coin!',
  command: coin,
};
