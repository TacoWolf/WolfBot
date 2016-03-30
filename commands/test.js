var helpers = require('./../helpers');
module.exports = {
  test: function (bot, user, userID, channelID, message) {
    var msg = '';
    var serverID = helpers.getServerID(bot, channelID);
    var adminCheckNormal = helpers.roleCheck(bot, serverID, userID, 'admin');
    var adminCheckSuper = helpers.roleCheck(bot, serverID, userID, 'superadmin');
    var adminCheckHouse = helpers.roleCheck(bot, serverID, userID, 'headmaster');
    if (adminCheckNormal === true) {
      msg += 'Can do WB Admin things\n';
    } else {
      msg += 'Can NOT do WB Admin things\n';
    }
    if (adminCheckSuper === true) {
      msg += 'Can do WB SuperAdmin things\n';
    } else {
      msg += 'Can NOT do WB SuperAdmin things\n';
    }
    if (adminCheckHouse === true) {
      msg += 'Is a Headmaster';
    } else {
      msg += 'Is NOT a Headmaster';
    }
    bot.sendMessage({
      to: channelID,
      message: msg
    });
  }
};