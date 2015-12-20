var helpers = require('./../helpers');

function butt(bot, user, userID, channelID, message) {
    helpers.statistics("butt", user, userID, channelID, message);
    if (parameters[1] === undefined) {
        switch (helpers.randomator(3)) {
            case 0:
                bot.sendMessage({
                    to: channelID,
                    message: "**" + user + "** thinks _they're_ a butt. Heh. >w>"
                });
                break;
            case 1:
                bot.sendMessage({
                    to: channelID,
                    message: "**" + user + "** just butted themselves. How's that work? `.w.`"
                });
                break;
            case 2:
                bot.sendMessage({
                    to: channelID,
                    message: "You know who's a butt? **" + user + "**. At least... _they_ think so. o:"
                });
                break;
        }
    } else {
        var buttedUser = "";
        buttedUser = bot.fixMessage(parameters[1]);
        buttedUser = buttedUser.substring(1);
        bot.sendMessage({
            to: channelID,
            message: "**" + user + "** thinks **" + buttedUser + "** is a butt."
        });
    }
}

module.exports = {
    command: butt
}
