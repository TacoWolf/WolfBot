var helpers = require('./../helpers');
var config = require('./../config.json');

function listemotes(bot, user, userID, channelID, message) {
    helpers.statistics('emotes', user, userID, channelID, message);
    var commands = require('./index');
    var msg = '**Oh, oh! I-I can post emotes!** Here's a list of 'em. :3 \n \n';
    for (var key in commands.triggers) {
        var command = commands.triggers[key];
        if (command.typeOf != 'emote' || command.hidden) continue;
        msg += '`' + config.trigger + key + '`';
        msg += ' - ' + command.description;
        msg += '\n';
    }
    msg += '\n'
    msg += 'Use them, don\'t abuse them! :green_heart:';
    bot.sendMessage({
        to: userID,
        message: msg
    });
};

module.exports = {
    command: listemotes
}
