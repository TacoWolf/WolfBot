var helpers = require('./../helpers');

function wbtreat(bot, user, userID, channelID, message) {
    helpers.statistics("treats", user, userID, channelID, message);
    switch (helpers.randomator(3)) {
        case 0:
            bot.sendMessage({
                to: channelID,
                message: "[nomnomnomnom~]"
            });
            break;
        case 1:
            bot.sendMessage({
                to: channelID,
                message: "[nibbles up the treat happily~]"
            });
            break;
        case 2:
            bot.sendMessage({
                to: channelID,
                message: "[yips eagerly, wagging his tail as he stands on his hind paws, soon nibbling up the treat happily~]"
            });
            break;
    }
}

module.exports = {
    command: wbtreat
}
