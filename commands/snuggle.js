var helpers = require('./../helpers');

function snuggle(bot, user, userID, channelID, message) {
    helpers.statistics("snuggles", user, userID, channelID, message);
    if (parameters[1] === undefined) {
        switch (helpers.randomator(3)) {
            case 0:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot bounds up and snuggles up to <@" + userID + "> happily~] :green_heart:"
                });
                break;
            case 1:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot snugs <@" + userID + "> adorably, wagging his tail~] `^w^`"
                });
                break;
            case 2:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot pantpants and licks <@" + userID + "> playfully before snuggling them happily. D'aww~] :green_heart:"
                });
                break;
        }
    } else {
        var snuggledUser = "";
        for (var i = 1; i < parameters.length; i++) {
            snuggledUser = snuggledUser + parameters[1];
        };
        switch (helpers.randomator(3)) {
            case 0:
                bot.sendMessage({
                    to: channelID,
                    message: "<@" + userID + "> snuggles up to " + snuggledUser + " sweetly. :3"
                });
                break;
            case 1:
                bot.sendMessage({
                    to: channelID,
                    message: "<@" + userID + "> flops atop " + snuggledUser + ", snuggling them close. `^w^`"
                });
                break;
            case 2:
                bot.sendMessage({
                    to: channelID,
                    message: "<@" + userID + "> snuggles next to " + snuggledUser + ". D'aww~ :green_heart:"
                });
                break;
        }
    }
}

module.exports = {
    command: snuggle
}
