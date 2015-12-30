var helpers = require('./../helpers');

function voice(bot, user, userID, channelID, message) {
    helpers.statistics("voice", user, userID, channelID, message);
    bot.sendMessage({
        to: channelID,
        message: "Hey, @everyone ! **" + user + "** wants to check and see who wants to wants join voice chat."
    });
}
module.exports = {
    command: voice
}
