var helpers = require('./../helpers');

function fuck(bot, user, userID, channelID, message) {
    bot.uploadFile({channel:channelID, file: fs.createReadStream("emote/torielshock.png")}, function() {
        switch (helpers.randomator(2)) {
            case 0:
                bot.sendMessage({
                    to: channelID,
                    message: '"(Who raised this _child?_)"'
                });
                break;
            case 1:
                bot.sendMessage({
                    to: channelID,
                    message: '"M-my child, what manners are _those?_ "'
                });
                break;
        }
    });
}

module.exports = {
    command: fuck
}
