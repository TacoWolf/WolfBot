var helpers = require('./../helpers');

function hug(bot, user, userID, channelID, message) {
    helpers.statistics("hug", user, userID, channelID, message);
    if (parameters[1] === undefined) {
        switch (helpers.randomator(3)) {
            case 0:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot bounds up and hugs **" + user + "** happily~] :green_heart:"
                });
                break;
            case 1:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot hugs **" + user + "** happily, wagging his tail~] `^w^`"
                });
                break;
            case 2:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot gives **" + user + "** a big hug. D'aww~] :green_heart:"
                });
                break;
        }
    } else {
        var huggedUser = "";
        huggedUser = bot.fixMessage(parameters[1]);
        huggedUser = huggedUser.substring(1);
        switch (helpers.randomator(3)) {
            case 0:
                bot.sendMessage({
                    to: channelID,
                    message: "**" + user + "** gives **" + huggedUser + "** a really big hug. :3"
                });
                break;
            case 1:
                bot.sendMessage({
                    to: channelID,
                    message: "**" + user + "** squeezes **" + huggedUser + "** tightly! Snuggles~ `^w^`"
                });
                break;
            case 2:
                bot.sendMessage({
                    to: channelID,
                    message: "**" + user + "** hugs **" + huggedUser + "**. D'aww~ :green_heart:"
                });
                break;
        }
    }
}

module.exports = {
    command: hug
}
