var helpers = require('./../helpers');

function poke(bot, user, userID, channelID, message) {
    helpers.statistics("poke", user, userID, channelID, message);
    if (parameters[1] === undefined) {
        switch (helpers.randomator(3)) {
            case 0:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot pokes **" + user + "** lightly.] o:"
                });
                break;
            case 1:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot noses **" + user + "** gently, poking them.] `o3o`"
                });
                break;
            case 2:
                bot.sendMessage({
                    to: channelID,
                    message: "[WolfBot nudges **" + user + "** gently with a paw.]"
                });
                break;
        }
    } else {
        var pokedUser = "";
        pokedUser = bot.fixMessage(parameters[1]);
        pokedUser = pokedUser.substring(1);
        switch (helpers.randomator(3)) {
            case 0:
                bot.sendMessage({
                    to: channelID,
                    message: "**" + user + "** pokes **" + pokedUser + "** lightly."
                });
                break;
            case 1:
                bot.sendMessage({
                    to: channelID,
                    message: "**" + user + "** nudges **" + pokedUser + "** with a finger."
                });
                break;
            case 2:
                bot.sendMessage({
                    to: channelID,
                    message: "**" + user + "** pokes **" + pokedUser + "**. You there? ;w;"
                });
                break;
        }
    }
}

module.exports = {
    command: poke
}
