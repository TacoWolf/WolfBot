var helpers = require('./../helpers');
function hug(bot, user, userID, channelID, message) {
  helpers.statistics('hug', user, userID, channelID, message);
  msg = '';
  if (parameters[1] === undefined) {
    hugs = [
      '[WolfBot bounds up and hugs **' + user + '** happily~] :green_heart:',
      '[WolfBot hugs **' + user + '** happily, wagging his tail~] `^w^`',
      '[WolfBot gives **' + user + '** a big hug. D\'aww~] :green_heart:'
    ];
    msg = helpers.randomArray(hugs);
  } else {
    var huggedUser = '';
    huggedUser = bot.fixMessage(parameters[1]);
    huggedUser = huggedUser.substring(1);
    hugs = [
      '**' + user + '** gives **' + huggedUser + '** a really big hug. :3',
      '**' + user + '** squeezes **' + huggedUser + '** tightly! Snuggles~ `^w^`',
      '**' + user + '** hugs **' + huggedUser + '**. D\'aww~ :green_heart:'
    ];
    msg = helpers.randomArray(hugs);
  }
  bot.sendMessage({
    to: channelID,
    message: msg
  });
}
module.exports = { command: hug };