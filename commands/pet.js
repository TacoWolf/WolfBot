var helpers = require('./../helpers');
function pet(bot, user, userID, channelID, message) {
  helpers.statistics('pet', user, userID, channelID, message);
  pets = [
    '[it rolls over and exposes its belly, wagging its tail and seeming to ask for more pets~]',
    '[murrs happily, leaning into the pets~]',
    '[yaps eagerly, murring and wagging its tail~]',
    '[yaps eagerly, murring~]'
  ];
  msg = helpers.randomArray(pets);
  bot.sendMessage({
    to: channelID,
    message: msg
  });
}
module.exports = { command: pet };