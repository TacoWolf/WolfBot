var helpers = require('./../helpers');

function ping(bot, user, userID, channelID, message) {
    helpers.statistics('ping', user, userID, channelID, message);
    bot.sendMessage({
        to: channelID,
        message: 'Pong!'
    });
}

module.exports = {
    command: ping
}
