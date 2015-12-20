var request = require('request');
function steamemote(bot, user, userID, channelID, message) {
    var matches = [];
    var r = new RegExp(/:(.*?):/g);
    var e = r.exec(parameters[1]);
    while (e) {
        matches.push(e[1]);
        e = r.exec(parameters[1]);
    }

    function getSteamEmote(m) {
        if (m.length > 0) {
            var emote = m.splice(0, 1)[0];
            // console.log(emote);
            var req = request.get('http://cdn.steamcommunity.com/economy/emoticon/' + emote, function(err, res, body) {
                if (!err && res.statusCode === 200) {
                    // console.log("Got: http://cdn.steamcommunity.com/economy/emoticon/" + emote);
                    bot.uploadFile({
                        channel: channelID,
                        file: {
                            value: request.get('http://cdn.steamcommunity.com/economy/emoticon/' + emote),
                            options: {
                                filename: emote + ".png",
                                contentType: 'image/png'
                            }
                        }
                    }, function(b) {
                        // console.log(b);
                        getSteamEmote(m);
                    });
                }
                else {
                    bot.sendMessage({to: channelID, message: "I-I couldn't find an emote that was like **" + parameters[1] + "**... ;w;"})
                }
            });
        } else {
            return;
        }
    }

    getSteamEmote(matches);
}

module.exports = {
    command: steamemote
}
