var helpers = require('./../helpers');

function poke(bot, user, userID, channelID, message) {
    helpers.statistics("poke", user, userID, channelID, message);
    if (parameters[1] === undefined) {
        switch (helpers.randomator(3)) {
            case 0:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot pokes <@" + userID + "> lightly.] o:"
                });
                break;
            case 1:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot noses <@" + userID + "> gently, poking them.] `o3o`"
                });
                break;
            case 2:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot nudges <@" + userID + "> gently with a paw.]"
                });
                break;
        }
    } else {
        var pokedUser = "";
        for (var i = 1; i < parameters.length; i++) {
            pokedUser = pokedUser + parameters[1];
        };
        switch (helpers.randomator(3)) {
            case 0:
                bot.sendMessage({
                    to: channelID,
                    message: "<@" + userID + "> pokes " + pokedUser + " lightly."
                });
                break;
            case 1:
                bot.sendMessage({
                    to: channelID,
                    message: "<@" + userID + "> nudges " + pokedUser + " with a finger."
                });
                break;
            case 2:
                bot.sendMessage({
                    to: channelID,
                    message: "<@" + userID + "> pokes " + pokedUser + ". You there? ;w;"
                });
                break;
        }
    }
}

module.exports = {
    command: poke
}
