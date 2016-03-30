var helpers = require('./../helpers');
function exclaim(bot, user, userID, channelID, message) {
  punctuation = [
    '**!!!**',
    '**???**',
    '**...**'
  ];
  msg = helpers.randomArray(punctuation);
  bot.sendMessage({
    to: channelID,
    message: msg
  });
}
module.exports = { command: exclaim };