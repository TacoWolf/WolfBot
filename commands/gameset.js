var helpers = require('./../helpers');

function gameset(bot, user, userID, channelID, message) {
    var adminTest = helpers.superAdmin(bot, userID);
    var msg = "";
    if (adminTest = true) {
        var id = parameters[1];
        if (id === undefined) {
            id = null;
        }
        bot.setPresence({
            game: id
        })
        msg += "Game playing set to **" + id + "**.";
    } else {
        msg += "Permission Denied: You're not an admin!"
    }
    bot.sendMessage({
        to: userID,
        message: msg
    })
}

module.exports = {
    command: gameset
}
