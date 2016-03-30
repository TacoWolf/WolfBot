var helpers = require('./../helpers');
function diceroll(bot, user, userID, channelID, message) {
  var msg = '**[WolfBot rolls some dice.]** \n';
  var rolllog = '';
  var roll = parameters[1].split('d');
  if (!isNaN(parseInt(roll[0])) && !isNaN(parseInt(roll[1]))) {
    amount = parseInt(roll[0]);
    dietype = parseInt(roll[1]);
    if (amount <= 25 && dietype <= 1000) {
      for (var i = 0; i < amount; i++) {
        roll = Math.floor(Math.random() * dietype) + 1;
        rolllog = rolllog + ' ' + roll;
      }
      msg += 'Ooh! I rolled **' + amount + 'd' + dietype + '** and I got... \n \n';
      msg += '`' + rolllog + '` \n\nT-that\'s a good roll, right? :3';
      helpers.statistics('dice', user, userID, channelID, message);
    }
    if (amount > 25 || dietype > 1000) {
      msg += '...th-that\'s a lot of dice... ;w;\n I-I can\'t count that high... try using smaller numbers?';
    }
  } else {
    msg += 'Uhm... I dunno what to do. ;w; \nMaybe try putting something in like `1d20` and trying again?';
  }
  bot.sendMessage({
    to: channelID,
    message: msg
  });
}
module.exports = { command: diceroll };