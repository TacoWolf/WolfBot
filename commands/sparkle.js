var helpers = require('./../helpers');

function sparkle(bot, user, userID, channelID, message) {
    helpers.statistics("sparkle", user, userID, channelID, message);
    bot.sendMessage({
        to: channelID,
        message: "(ﾉ◕ヮ◕)ﾉ* :sparkles: :star2: :star: :heart:"
    });
}

module.exports = {
    command: sparkle
}
