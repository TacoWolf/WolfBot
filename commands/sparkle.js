var helpers = require('./../helpers');
function sparkle(bot, user, userID, channelID, message) {
  helpers.statistics('sparkle', userID);
  bot.sendMessage({
    to: channelID,
    message: '`(ﾉ^w^)ﾉ` \u2764 \u2747️ \uD83D\uDC9B \uD83C\uDF1F \uD83D\uDC9A \u2B50 \uD83D\uDC99 \u2728 \uD83D\uDC9C'
  });
}
module.exports = { command: sparkle };