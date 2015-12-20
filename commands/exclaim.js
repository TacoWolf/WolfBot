var helpers = require('./../helpers');

function exclaim(bot, user, userID, channelID, message) {
    switch (helpers.randomator(2)) {
        case 0:
            bot.sendMessage({
                to: channelID,
                message: "**!!!**"
            });
            break;
        case 1:
            bot.sendMessage({
                to: channelID,
                message: "**???**"
            });
            break;
        default:
            bot.sendMessage({
                to: channelID,
                message: "**!!!**"
            });
            break;
    }
};

module.exports = {
    command: exclaim
}
