var helpers = require('./../helpers');
function diceroll(bot, user, userID, channelID, message) {
  var msg = '[WolfBot rolls some dice.] \n \n';
  var rolllog = '';
  var dietype = parameters[1];
  var amount = parameters[2];
  if (dietype === undefined || amount === undefined) {
    msg += 'Uhm... I dunno how many dice to roll. ;w; \nMaybe try putting in an actual value and trying again?';
    bot.sendMessage({
      to: channelID,
      message: msg
    });
    return;
  }
  if (amount > 20) {
    msg += 'Those are _way_ too many dice! I-I can\'t count that many... ;w; \nMaybe try a smaller amount and try again?';
    bot.sendMessage({
      to: channelID,
      message: msg
    });
    return;
  }
  while (dietype[0] === 'd') {
    dietype = dietype.substr(1);
  }
  dietype = parseInt(dietype);
  console.log(dietype);
  console.log(typeof dietype);
  console.log(isNaN(dietype));
  if (isNaN(dietype) === true) {
    msg += '...aww, something went wrong with my dice.... ;w;\nMaybe check what you sent and try again?';
    bot.sendMessage({
      to: channelID,
      message: msg
    });
    return;
  }
  for (var i = 0; i < amount; i++) {
    roll = Math.floor(Math.random() * dietype) + 1;
    rolllog = rolllog + ' ' + roll;
  }
  msg += 'Ooh! I rolled **' + amount + 'd' + dietype + '** and I got... \n \n';
  msg += '`' + rolllog + '` \n\nT-that\'s a good roll, right? :3';
  helpers.statistics('dice', user, userID, channelID, message);
  bot.sendMessage({
    to: channelID,
    message: msg
  });
}
module.exports = { command: diceroll };