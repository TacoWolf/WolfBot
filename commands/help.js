var helpers = require('./../helpers');
var commands = require('./index');

function help(bot, user, userID, channelID, message) {
    helpers.statistics("help", user, userID, channelID, message);
    var msg = "**O-oh! You need help?** Here's a list of commands. :3 \n \n";
    var commands = require('./index');
    for (var key in commands) {
        var command = commands[key];
        console.log(command);
        if (command.typeOf != 'text' || command.hidden) continue;
        msg += "`" + key + "`";
        msg += " - " + command.description;
        msg += "\n";
    }
    console.log(command);
    msg += "\n"
    msg += "Use them, don't abuse them! :green_heart:";
    bot.sendMessage({
        to: userID,
        message: msg
    });
};

module.exports = {
    command: help
};
