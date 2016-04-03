var helpers = require('./../helpers');
function snuggle(bot, user, userID, channelID, message) {
  helpers.statistics('snuggles', userID);
  if (parameters[1] === undefined) {
    snuggles = [
      '[WolfBot bounds up and snuggles up to **' + user + '** happily~] :green_heart:',
      '[WolfBot snugs **' + user + '** adorably, wagging his tail~] `^w^`',
      '[WolfBot pantpants and licks **' + user + '** playfully before snuggling them happily. D\'aww~] :green_heart:'
    ];
    msg = helpers.randomArray(snuggles);
  } else {
    var snuggledUser = '';
    snuggledUser = bot.fixMessage(parameters[1]);
    snuggledUser = snuggledUser.substring(1);
    snuggles = [
      '**' + user + '** snuggles up to **' + snuggledUser + '** sweetly. :3',
      '**' + user + '** flops atop **' + snuggledUser + '**, snuggling them close. `^w^`',
      '**' + user + '** snuggles next to **' + snuggledUser + '**. D\'aww~ :green_heart:'
    ];
    msg = helpers.randomArray(snuggles);
  }
  bot.sendMessage({
    to: channelID,
    message: msg
  });
}
module.exports = { command: snuggle };