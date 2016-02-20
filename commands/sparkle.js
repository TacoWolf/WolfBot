var helpers = require('./../helpers');

function sparkle(bot, user, userID, channelID, message) {
    helpers.statistics("sparkle", user, userID, channelID, message);
    bot.sendMessage({
        to: channelID,
        message: "`(ﾉ^w^)ﾉ` ❤ ❇️ 💛 🌟 💚 ⭐ 💙 ✨ 💜"
    });
}

module.exports = {
    command: sparkle
}
