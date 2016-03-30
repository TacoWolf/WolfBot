var helpers = require('./../helpers');
function gameset(bot, user, userID, channelID, message) {
  var serverID = helpers.getServerID(bot, channelID);
  var adminCheck = helpers.roleCheck(bot, serverID, userID, 'superadmin');
  var msg = '';
  if (adminCheck === true) {
    var id = parameters[1];
    for (var i = 2; i < parameters.length; i++) {
      id = id + ' ' + parameters[i];
    }
    if (id === undefined) {
      id = null;
    }
    bot.setPresence({ game: id });
    msg += 'Game playing set to **' + id + '**.';
  } else {
    msg += 'Permission Denied: You\'re not an admin!';
  }
  bot.sendMessage({
    to: userID,
    message: msg
  });
}
module.exports = { command: gameset };