var helpers = require('./../helpers');

module.exports = {
    mention: function(bot, user, userID, channelID, message) {
        helpers.statistics("mentions", user, userID, channelID, message);
        switch (helpers.randomator(5)) {
            case 0:
                helpers.sendMessages(bot, channelID, ["What? ;w;"]);
                break;
            case 1:
                helpers.sendMessages(bot, channelID, ["[yip?]"]);
                break;
            case 2:
                helpers.sendMessages(bot, channelID, ["Awrrf? ;w;"]);
                break;
            case 3:
                helpers.sendMessages(bot, channelID, ["[snorts awake]"]);
                break;
            case 4:
                helpers.sendMessages(bot, channelID, ["Yeah? :3"]);
                break;
            default:
                helpers.sendMessages(bot, channelID, ["[bark!]"]);
        }
    },
    roll: function(bot, user, userID, channelID, message) {
        helpers.sendMessages(bot, channelID, ["[rolls over happily~]"]);
    },
    wbtreat: function(bot, user, userID, channelID, message) {
        helpers.statistics("treats", user, userID, channelID, message);
        switch (helpers.randomator(3)) {
            case 0:
                helpers.sendMessages(bot, channelID, ["[nomnomnomnom.]"]);
                break;
            case 1:
                helpers.sendMessages(bot, channelID, ["[nibbles up the treat happily~]"]);
                break;
            case 2:
                helpers.sendMessages(bot, channelID, ["[yips eagerly, wagging his tail as he stands on his hand paws, soon nibbling up the treat happily~]"]);
                break;
        }
    },
    bark: function(bot, user, userID, channelID, message) {
        helpers.sendMessages(bot, channelID, ["[bark!]"]);
    },
    sandwich: function(bot, user, userID, channelID, message) {
        helpers.statistics("sandwich", user, userID, channelID, message);
        helpers.sendMessages(bot, channelID, ["What? Make it yourself."]);
    },

    sudo: function(bot, user, userID, channelID, message) {
        helpers.statistics("sudosandwich", user, userID, channelID, message);
        helpers.sendMessages(bot, channelID, ["Okay."]);
    },

    love: function(bot, user, userID, channelID, message) {
        helpers.statistics("love", user, userID, channelID, message);
        helpers.sendMessages(bot, channelID, ["I-I love you, too. >w< :green_heart:"]);
    },
    gb: function(bot, user, userID, channelID, message) {
        helpers.sendMessages(bot, channelID, ["[happy pant~]"]);
    }
}
