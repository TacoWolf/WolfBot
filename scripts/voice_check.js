

const helpers = require(`${__dirname}/../helpers/`);

function voiceCheck(event) {
  let msg = 'Hey, everyone @here ! <@';
  msg += event.userID;
  msg += '> wants to see who wants to join voice chat. `^w^`';
  event.bot.sendMessage({
    to: event.channelID,
    message: msg,
  });
  helpers.statistics(event, 'voice');
}
module.exports = {
  name: 'voice',
  author: 'thattacoguy',
  syntax: 'voice',
  patterns: [/^voice/i],
  description: 'Check who wants to join voice chat!',
  command: voiceCheck,
};
