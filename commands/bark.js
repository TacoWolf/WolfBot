var helpers = require('./../helpers');
function bark(bot, user, userID, channelID, message) {
  bot.sendMessage({
    to: channelID,
    message: '[bark!]'
  });
}
module.exports = { command: bark };