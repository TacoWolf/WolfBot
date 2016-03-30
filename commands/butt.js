var helpers = require('./../helpers');
function butt(bot, user, userID, channelID, message) {
  helpers.statistics('butt', user, userID, channelID, message);
  if (parameters[1] === undefined) {
    butts = [
      'You know who\'s a butt? **' + user + '**. At least... _they_ think so. o:',
      '**' + user + '** thinks _they\'re_ a butt. Heh. >w>',
      '**' + user + '** just butted themselves. How\'s that work? `.w.`'
    ];
    msg = helpers.randomArray(butts);
    bot.sendMessage({
      to: channelID,
      message: msg
    });
  } else {
    var buttedUser = '';
    buttedUser = bot.fixMessage(parameters[1]);
    buttedUser = buttedUser.substring(1);
    bot.sendMessage({
      to: channelID,
      message: '**' + user + '** thinks **' + buttedUser + '** is a butt.'
    });
  }
}
module.exports = { command: butt };