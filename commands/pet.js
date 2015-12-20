var helpers = require('./../helpers');

function pet(bot, user, userID, channelID, message) {
    helpers.statistics("pet", user, userID, channelID, message);
    switch (helpers.randomator(3)) {
        case 0:
            bot.sendMessage({
                to: channelID,
                message: "[it rolls over and exposes its belly, wagging its tail and seeming to ask for more pets~]"
            });
            break;
        case 1:
            bot.sendMessage({
                to: channelID,
                message: "[murrs happily, leaning into the pets~]"
            });
            break;
        case 2:
            bot.sendMessage({
                to: channelID,
                message: "[yaps eagerly, murring and wagging its tail~]"
            });
            break;

        default:
            bot.sendMessage({
                to: channelID,
                message: "[yaps eagerly, murring~]"
            });
    }
};

module.exports = {
    command: pet
}
