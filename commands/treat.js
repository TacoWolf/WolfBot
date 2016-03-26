var helpers = require('./../helpers');

function wbtreat(bot, user, userID, channelID, message) {
    helpers.statistics('treats', user, userID, channelID, message);
    treats = ['[nomnomnomnom~]',
        '[nibbles up the treat happily~]',
        '[yips eagerly, wagging his tail as he stands on his hind paws, soon nibbling up the treat happily~]'
    ]
    msg = helpers.randomArray(treats)
    bot.sendMessage({
        to: channelID,
        message: msg
    });
}

module.exports = {
    command: wbtreat
}
