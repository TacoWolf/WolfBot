var helpers = require('./../helpers');
var fs = require('fs');

function fuck(bot, user, userID, channelID, message) {
    bot.uploadFile({
        to: channelID,
        file: "emote/torielshock.png"
    }, function() {
        myChild = ['"(Who raised this _child?_)"',
            '"M-my child, what manners are _those?_ "'
        ]
        msg = helpers.randomArray(myChild)
        bot.sendMessage({
            to: channelID,
            message: msg
        });
    });
}

module.exports = {
    command: fuck
}
